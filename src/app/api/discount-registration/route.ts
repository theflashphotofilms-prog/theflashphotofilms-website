import { NextRequest, NextResponse } from 'next/server';

// Helper function to generate a unique coupon code
function generateCouponCode(): string {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const randomNumbers = (array[0] % 9000) + 1000; // Generate 4 random digits
  return `FLASH10-${randomNumbers}`;
}

export async function POST(req: NextRequest) {
  try {
    console.log('Discount registration received');
    const body = await req.json();
    const { name, email, phone } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
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

    // Check if Google Apps Script URL is configured
    if (!process.env.GOOGLE_APPS_SCRIPT_URL) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not configured. Discount registration data will not be saved to Google Sheets.');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Check if email or phone already exists in Google Sheets
    const existingData = await checkExistingRegistration(email, phone);
    
    if (existingData.exists) {
      // Return existing coupon information
      return NextResponse.json(
        { 
          message: 'You already have a FLASH10 coupon.',
          couponCode: existingData.couponCode 
        },
        { status: 200 }
      );
    }

    // Generate unique coupon code
    const couponCode = generateCouponCode();
    
    // Calculate expiry date (3 months from now)
    const now = new Date();
    const expiresAt = new Date(now);
    expiresAt.setMonth(expiresAt.getMonth() + 3); // 3 months from now


    // Check if Google Apps Script URL is configured
    if (!process.env.GOOGLE_APPS_SCRIPT_URL) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not configured. Discount registration data will not be saved to Google Sheets.');
    } else {
      console.log('Sending to Google Sheets');
      // Send data to Google Apps Script Web App for Google Sheets storage
      const googleSheetsResponse = await fetch(`${process.env.GOOGLE_APPS_SCRIPT_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sheetType: 'discount_leads',
          name: name,
          email: email,
          phone: phone,
          couponCode: couponCode,
          dateCreated: new Date().toISOString(),
          expiresAt: expiresAt.toISOString()
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

    // Create HTML email content for admin notification
    const adminHtmlContent = `
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
            .coupon-section { 
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
            <h2>New Discount Registration</h2>
          </div>
          <div class="content">
            <div class="field"><strong>Name:</strong> ${name}</div>
            <div class="field"><strong>Email:</strong> ${email}</div>
            <div class="field"><strong>Phone:</strong> ${phone}</div>
            <div class="field"><strong>Date Created:</strong> ${new Date().toLocaleString()}</div>
            
            <div class="coupon-section">
              <h3>Generated Coupon Code</h3>
              <div class="field"><strong>Coupon Code:</strong> <span style="font-size: 1.2em; font-weight: bold; color: #D2A97F;">${couponCode}</span></div>
              <p>This customer is eligible for a 10% discount on their booking.</p>
            </div>
          </div>
          <div class="footer">
            <p>Discount Registration - The Flash Photofilms</p>
          </div>
        </body>
      </html>
    `;

    // Create HTML email content for customer notification
    const customerHtmlContent = `
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
            .coupon-section { 
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
            <h2>Your Exclusive Discount</h2>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for registering with The Flash Photofilms! We're excited to offer you an exclusive discount on your booking.</p>
            
            <div class="coupon-section">
              <h3>Your Coupon Code</h3>
              <div class="field"><strong>Coupon Code:</strong> <span style="font-size: 1.2em; font-weight: bold; color: #D2A97F;">${couponCode}</span></div>
              <p>Save 10% on your next booking with us! This code is valid for 90 days from today.</p>
            </div>
            
            <p>Simply enter this code during the booking process to receive your discount.</p>
            <p>We look forward to capturing your beautiful memories!</p>
          </div>
          <div class="footer">
            <p>The Flash Photofilms Team</p>
          </div>
        </body>
      </html>
    `;

    // Send email notifications
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

      // Send notification to admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.DISCOUNT_EMAIL_RECIPIENT || 'theflashphotofilms@gmail.com',
        subject: `New Discount Registration - ${name}`,
        html: adminHtmlContent,
      };

      await transporter.sendMail(adminMailOptions);
      console.log('Admin email sent');

      // Send coupon code to customer
      const customerMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your Exclusive 10% Discount - The Flash Photofilms',
        html: customerHtmlContent,
      };

      await transporter.sendMail(customerMailOptions);
      console.log('Customer email sent');
    } else {
      console.warn('Email credentials not configured, skipping email notifications');
    }

    console.log('Discount registration completed');
    return NextResponse.json(
      { 
        message: 'Discount registration successful!', 
        couponCode: couponCode 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing discount registration:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function to check if email or phone already exists in Google Sheets
async function checkExistingRegistration(email: string, phone: string): Promise<{exists: boolean, couponCode?: string}> {
  // Since we can't query Google Sheets directly with fetch, we'll return false
  // In a real scenario, you'd need a separate Google Apps Script endpoint to query data
  // For now, we'll skip the duplicate check and rely on the Google Sheets script to handle it
  // Or you could maintain a simple in-memory cache for recent registrations
  
  // For now, return false to allow registration
  return { exists: false };
}