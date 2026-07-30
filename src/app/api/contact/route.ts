import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    console.log('Contact form received');
    const body = await req.json();
    const { fullName, email, phone, service, weddingDate, message } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !service || !weddingDate) {
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

    // Check if Google Apps Script URL is configured
    if (!process.env.GOOGLE_APPS_SCRIPT_URL) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not configured. Contact form data will not be saved to Google Sheets.');
    } else {
      console.log('Sending to Google Sheets');
      // Send data to Google Apps Script Web App for Google Sheets storage
      const googleSheetsResponse = await fetch(`${process.env.GOOGLE_APPS_SCRIPT_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sheetType: 'contact_leads',
          fullName: fullName,
          email: email,
          phone: phone,
          service: service,
          weddingDate: weddingDate,
          message: message,
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

    // Create HTML email content
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
            .footer { background-color: #1E3525; padding: 10px; text-align: center; color: #D2A97F; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field"><strong>Full Name:</strong> ${fullName}</div>
            <div class="field"><strong>Email:</strong> ${email}</div>
            <div class="field"><strong>Phone:</strong> ${phone}</div>
            <div class="field"><strong>Service:</strong> ${service}</div>
            <div class="field"><strong>Wedding Date:</strong> ${new Date(weddingDate).toLocaleDateString()}</div>
            <div class="field"><strong>Message:</strong> ${message || 'N/A'}</div>
          </div>
          <div class="footer">
            <p>Contact Form Submission - The Flash Photofilms</p>
          </div>
        </body>
      </html>
    `;

    // Send email notification
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
        to: process.env.CONTACT_EMAIL_RECIPIENT || 'theflashphotofilms@gmail.com',
        subject: `New Contact Form Submission from ${fullName}`,
        html: htmlContent,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent');
    } else {
      console.warn('Email credentials not configured, skipping email notification');
    }

    console.log('Contact form completed');
    return NextResponse.json(
      { message: 'Contact form submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}