import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    console.log('Booking request received');
    const body = await req.json();
    const { 
      fullName, 
      email, 
      phone, 
      eventType, 
      eventDate, 
      package: pkg, 
      couponCode, 
      notes,
      originalPrice,
      discountApplied,
      finalPrice,
      couponValid
    } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !eventType || !eventDate || !pkg) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Phone number must be 10 digits' },
        { status: 400 }
      );
    }

    // If a coupon code is provided, validate it again server-side and mark as used
    let updatedCouponValid = couponValid;
    if (couponCode) {
      const couponValidationResult = await useCoupon(couponCode);
      if (!couponValidationResult.valid) {
        return NextResponse.json(
          { error: couponValidationResult.errorMessage },
          { status: 400 }
        );
      }
      updatedCouponValid = true;
    }

    // Check if Google Apps Script URL is configured
    if (!process.env.GOOGLE_APPS_SCRIPT_URL) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not configured. Booking data will not be saved to Google Sheets.');
    } else {
      console.log('Sending to Google Sheets');
      // Send data to Google Apps Script Web App for Google Sheets storage
      const googleSheetsResponse = await fetch(`${process.env.GOOGLE_APPS_SCRIPT_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sheetType: 'booking_requests',
          fullName: fullName,
          email: email,
          phone: phone,
          eventType: eventType,
          eventDate: eventDate,
          package: pkg,
          couponCode: couponCode || 'N/A',
          notes: notes || 'N/A',
          originalPrice: originalPrice || 0,
          discountApplied: discountApplied || 0,
          finalPrice: finalPrice || 0,
          couponValid: updatedCouponValid,
          timestamp: new Date().toISOString()
        })
      });

      if (!googleSheetsResponse.ok) {
        // Safely handle response that might be HTML instead of JSON
        const contentType = googleSheetsResponse.headers.get('content-type');
        let errorData;
        
        if (contentType && contentType.includes('application/json')) {
          errorData = await googleSheetsResponse.json();
        } else {
          // If not JSON, get the text content (likely HTML error page)
          const errorText = await googleSheetsResponse.text();
          errorData = { 
            status: googleSheetsResponse.status,
            statusText: googleSheetsResponse.statusText,
            body: errorText 
          };
        }
        
        console.error('Error saving to Google Sheets:', errorData);
        // Don't expose the actual error to the user, but log it server-side
      } else {
        console.log('Google Sheets save completed');
      }
    }

    // Create HTML email content for booking notification
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #1E3525; padding: 20px; text-align: center; }
            .header h2 { color: #D2A97F; margin: 0; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .field strong { color: #1E3525; display: inline-block; width: 150px; }
            .price-summary { 
              background-color: #f9f9f9; 
              padding: 15px; 
              border-radius: 5px; 
              margin: 15px 0; 
              border-left: 4px solid #D2A97F;
            }
            .footer { background-color: #1E3525; padding: 10px; text-align: center; color: #D2A97F; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>New Booking Request</h2>
          </div>
          <div class="content">
            <div class="field"><strong>Name:</strong> ${fullName}</div>
            <div class="field"><strong>Email:</strong> ${email}</div>
            <div class="field"><strong>Phone:</strong> ${phone}</div>
            <div class="field"><strong>Event Type:</strong> ${eventType}</div>
            <div class="field"><strong>Event Date:</strong> ${new Date(eventDate).toLocaleDateString()}</div>
            <div class="field"><strong>Package:</strong> ${pkg}</div>
            <div class="field"><strong>Coupon Code:</strong> ${couponCode || 'N/A'}</div>
            <div class="field"><strong>Notes:</strong> ${notes || 'N/A'}</div>
            
            <div class="price-summary">
              <h3>Price Summary</h3>
              <div class="field"><strong>Original Price:</strong> ₹${(originalPrice || 0).toLocaleString()}</div>
              <div class="field"><strong>Discount Applied:</strong> ₹${(discountApplied || 0).toLocaleString()}</div>
              <div class="field"><strong>Final Price:</strong> ₹${(finalPrice || 0).toLocaleString()}</div>
              <div class="field"><strong>Coupon Valid:</strong> ${updatedCouponValid ? 'Yes' : 'No'}</div>
            </div>
          </div>
          <div class="footer">
            <p>New Booking Request - The Flash Photofilms</p>
          </div>
        </body>
      </html>
    `;

    // Send email notification to admin
    console.log('EMAIL_USER configured:', !!process.env.EMAIL_USER);
    console.log('EMAIL_APP_PASSWORD configured:', !!process.env.EMAIL_APP_PASSWORD);
    
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      console.log('Sending email');
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.default.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.BOOKING_EMAIL_RECIPIENT || 'theflashphotofilms@gmail.com',
        subject: `New Booking Request from ${fullName}`,
        html: htmlContent,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent');
    } else {
      console.warn('Email credentials not configured, skipping email notification');
    }

    console.log('Booking request completed');
    return NextResponse.json(
      { message: 'Booking request submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing booking request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function to validate and mark coupon as used in Google Sheets
async function useCoupon(couponCode: string) {
  try {
    // First validate the coupon format
    if (!couponCode || !couponCode.startsWith('FLASH10-')) {
      return {
        valid: false,
        errorMessage: 'Invalid coupon code format. Must be FLASH10-XXXX'
      };
    }

    // Call the coupon validation API with 'use' action to validate and mark as used
    try {
      const useResponse = await fetch('/api/coupon-validation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          couponCode: couponCode, 
          action: 'use' 
        }),
      });

      const useData = await useResponse.json();

      if (!useResponse.ok || !useData.valid) {
        return {
          valid: false,
          errorMessage: useData.error || 'Invalid or expired coupon code'
        };
      }

      return {
        valid: true,
        errorMessage: null
      };
    } catch (useError) {
      console.error('Error using coupon:', useError);
      return {
        valid: false,
        errorMessage: 'Error processing coupon. Please try again.'
      };
    }
  } catch (error) {
    console.error('Error validating coupon:', error);
    return {
      valid: false,
      errorMessage: 'Error validating coupon'
    };
  }
}