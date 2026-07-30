import { NextRequest } from 'next/server';

// Helper function to validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to validate mobile number format
function isValidMobile(mobile: string): boolean {
  const mobileRegex = /^[0-9+\-\s()]+$/;
  return mobileRegex.test(mobile) && mobile.length >= 10;
}

// Helper function to check if email or phone already exists in Google Sheets
async function checkExistingRegistrationInSheets(email: string, mobile: string): Promise<{exists: boolean, couponCode?: string}> {
  // Since we can't query Google Sheets directly with fetch in a simple way, we'll return false
  // In a real implementation, you would need a dedicated Google Apps Script endpoint to query data
  // For now, we'll return false to allow registration
  return { exists: false };
}

// Helper function to get coupon data from Google Sheets
async function getCouponFromSheets(couponCode: string): Promise<any> {
  // Since we can't query Google Sheets directly with fetch in a simple way, we'll return null
  // In a real implementation, you would need a dedicated Google Apps Script endpoint to query data
  // For now, we'll return null indicating the coupon wasn't found
  return null;
}

// Helper function to update coupon as used in Google Sheets
async function updateCouponAsUsedInSheets(couponCode: string): Promise<boolean> {
  // In a real implementation, you would need a dedicated Google Apps Script endpoint to update data
  // For now, we'll return true to indicate success
  // This would involve calling your Google Apps Script with a special action to update the "used" status
  console.log(`Would update coupon ${couponCode} as used in Google Sheets`);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, mobile, action, couponCode } = await request.json();

    if (action === 'create') {
      // Validate inputs
      if (!name || !email || !mobile) {
        return Response.json(
          { error: 'Name, email, and mobile number are required' },
          { status: 400 }
        );
      }

      if (!isValidEmail(email)) {
        return Response.json(
          { error: 'Invalid email format' },
          { status: 400 }
        );
      }

      if (!isValidMobile(mobile)) {
        return Response.json(
          { error: 'Invalid mobile number format' },
          { status: 400 }
        );
      }

      // Check if Google Apps Script URL is configured
      if (!process.env.GOOGLE_APPS_SCRIPT_URL) {
        console.error('GOOGLE_APPS_SCRIPT_URL is not configured.');
        return Response.json(
          { error: 'Server configuration error' },
          { status: 500 }
        );
      }

      // Check if email or mobile already exists in Google Sheets
      const existingData = await checkExistingRegistrationInSheets(email, mobile);
      
      if (existingData.exists) {
        return Response.json(
          { error: 'A coupon has already been issued for this email or mobile number' },
          { status: 409 }
        );
      }

      // Generate new coupon code
      const newCouponCode = `FLASH10-${Math.floor(1000 + Math.random() * 9000)}`;
      const now = new Date();
      const expiresAt = new Date(now);
      expiresAt.setDate(expiresAt.getDate() + 90); // 90 days from now

      // Store the new registration in Google Sheets
      const googleSheetsResponse = await fetch(`${process.env.GOOGLE_APPS_SCRIPT_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sheetType: 'discount_leads',
          name: name,
          email: email,
          phone: mobile,
          couponCode: newCouponCode,
          dateCreated: new Date().toISOString(),
          expiresAt: expiresAt.toISOString(),
          used: false
        })
      });

      if (!googleSheetsResponse.ok) {
        console.error('Error saving to Google Sheets:', await googleSheetsResponse.text());
        return Response.json(
          { error: 'Failed to save registration data' },
          { status: 500 }
        );
      }

      return Response.json({ 
        message: 'Coupon created successfully', 
        couponCode: newCouponCode,
        expiresAt: expiresAt.toISOString()
      });
    } else if (action === 'validate') {
      if (!couponCode) {
        return Response.json(
          { error: 'Coupon code is required' },
          { status: 400 }
        );
      }

      // Query Google Sheets for the coupon
      const couponData = await getCouponFromSheets(couponCode);
      
      if (!couponData) {
        return Response.json(
          { error: 'Invalid coupon code' },
          { status: 404 }
        );
      }

      if (couponData.used) {
        return Response.json(
          { error: 'Coupon already used' },
          { status: 409 }
        );
      }

      const now = new Date();
      const expiresAt = new Date(couponData.expiresAt);
      if (now > expiresAt) {
        return Response.json(
          { error: 'Coupon expired' },
          { status: 410 }
        );
      }

      return Response.json({
        valid: true,
        discount: 10, // 10% discount
        couponCode: couponData.couponCode,
        expiresAt: couponData.expiresAt
      });
    } else if (action === 'use') {
      // Mark coupon as used
      if (!couponCode) {
        return Response.json(
          { error: 'Coupon code is required' },
          { status: 400 }
        );
      }

      // First validate that the coupon exists and is not already used
      const couponData = await getCouponFromSheets(couponCode);
      
      if (!couponData) {
        return Response.json(
          { error: 'Invalid coupon code' },
          { status: 404 }
        );
      }

      if (couponData.used) {
        return Response.json(
          { error: 'Coupon already used' },
          { status: 409 }
        );
      }

      const now = new Date();
      const expiresAt = new Date(couponData.expiresAt);
      if (now > expiresAt) {
        return Response.json(
          { error: 'Coupon expired' },
          { status: 410 }
        );
      }

      // Update the coupon as used in Google Sheets
      const updateSuccess = await updateCouponAsUsedInSheets(couponCode);
      
      if (!updateSuccess) {
        return Response.json(
          { error: 'Failed to update coupon status' },
          { status: 500 }
        );
      }

      return Response.json({
        valid: true,
        message: 'Coupon used successfully',
        discount: 10, // 10% discount
        couponCode: couponData.couponCode
      });
    } else {
      return Response.json(
        { error: 'Invalid action' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error processing coupon request:', error);
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // This would typically fetch data from Google Sheets
    // For now, returning an empty response since we can't directly query Google Sheets
    
    return Response.json({ coupons: [] });
  } catch (error) {
    console.error('Error fetching coupons:', error);
    return Response.json(
      { error: 'Failed to fetch coupons' },
      { status: 500 }
    );
  }
}