import { NextRequest, NextResponse } from 'next/server';

// Helper function to check if email or phone already exists in Google Sheets
async function checkExistingRegistration(email: string, phone: string): Promise<{exists: boolean}> {
  try {
    // Check if Google Apps Script URL is configured
    if (!process.env.GOOGLE_APPS_SCRIPT_URL) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not configured. Cannot check existing registrations.');
      // In case of misconfiguration, we'll proceed with registration to avoid blocking users
      return { exists: false };
    }

    // Call Google Apps Script to query existing registrations
    const response = await fetch(`${process.env.GOOGLE_APPS_SCRIPT_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'get_registration_by_email_or_phone',
        email: email,
        phone: phone
      })
    });

    if (!response.ok) {
      console.error('Error querying Google Sheets for existing registration:', await response.text());
      // In case of query failure, we'll proceed with registration to avoid blocking users
      return { exists: false };
    }

    const result = await response.json();
    
    if (result && result.exists) {
      return { 
        exists: true
      };
    }
    
    return { exists: false };
  } catch (error) {
    console.error('Error checking existing registration:', error);
    // In case of error, we'll proceed with registration to avoid blocking users
    return { exists: false };
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone } = await request.json();
    
    // Validate input
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Basic validation for phone number format
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format. Must be 10 digits.' },
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

    // Check if Google Apps Script URL is configured
    if (!process.env.GOOGLE_APPS_SCRIPT_URL) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not configured. Registration data will not be saved to Google Sheets.');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Check if email or phone already exists in Google Sheets
    const existingData = await checkExistingRegistration(email, phone);
    
    if (existingData.exists) {
      // Return duplicate registration response
      return NextResponse.json(
        { 
          success: false,
          duplicate: true,
          message: 'You have already registered with us using this email address or phone number.'
        },
        { status: 200 }
      );
    }

    // Calculate registration date
    const registrationDate = new Date().toISOString();

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
        registrationDate: registrationDate
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
      return NextResponse.json(
        { error: 'Failed to save registration data' },
        { status: 500 }
      );
    }

    // Create HTML email content for customer notification
    const customerHtmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              background-color: #ffffff;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border: 1px solid #eaeaea;
              border-radius: 4px;
            }
            .header {
              text-align: left;
              margin-bottom: 20px;
            }
            .content {
              padding: 0;
            }
            .footer {
              margin-top: 20px;
              padding-top: 10px;
              border-top: 1px solid #eee;
              text-align: left;
              font-size: 14px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Registration Confirmation</h2>
            </div>
            <div class="content">
              <p>Hello ${name},</p>
              <p>Thank you for registering with The Flash Photofilms.</p>
              
              <p>Your registration has been received successfully.</p>
              
              <p>If you make your first online booking within 30 days, you may be eligible for a 10% discount. Eligibility will be verified using your registered email address and phone number.</p>
              
              <p>If you have any questions, please contact us.</p>
            </div>
            <div class="footer">
              <p>Regards,<br>The Flash Photofilms</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email notifications
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      console.log('Creating transporter');
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.default.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      // Verify transporter configuration
      console.log('Transporter created, attempting verification...');
      try {
        await transporter.verify();
        console.log('Transporter verification successful - SMTP connection OK');
      } catch (verifyError) {
        console.error('Transporter verification failed:', verifyError);
      }

      // Send welcome email to customer
      const customerMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        replyTo: process.env.EMAIL_USER,
        subject: 'Registration Confirmation',
        html: customerHtmlContent,
      };

      console.log('Sending email to:', email);
      console.log('From:', process.env.EMAIL_USER);
      
      const info = await transporter.sendMail(customerMailOptions);

      console.log('Message ID:', info.messageId);
      console.log('Accepted:', info.accepted);
      console.log('Rejected:', info.rejected);
      console.log('Response:', info.response);
    } else {
      console.warn('Email credentials not configured, skipping email notifications');
    }

    // Return success response
    return NextResponse.json({ 
      success: true,
      message: 'Registration successful!'
    });
  } catch (error: any) {
    console.error('Error processing registration:', error);
    return NextResponse.json(
      { error: 'Failed to register' },
      { status: 500 }
    );
  }
}