import { NextRequest, NextResponse } from 'next/server';

// Dynamically import Resend to avoid build-time initialization

// Simple rate limiting using a Map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

// Define validation functions
const validateAndSanitizeInput = (data: any) => {
  // Check if required fields exist
  if (!data.name || !data.email || !data.message) {
    throw new Error('Name, email, and message are required fields.');
  }

  // Type and format validation
  if (typeof data.name !== 'string') {
    throw new Error('Name must be a string.');
  }
  
  if (typeof data.email !== 'string') {
    throw new Error('Email must be a string.');
  }
  
  if (typeof data.subject !== 'string' && data.subject !== undefined) {
    throw new Error('Subject must be a string.');
  }
  
  if (typeof data.phone !== 'string' && data.phone !== undefined) {
    throw new Error('Phone must be a string.');
  }
  
  if (typeof data.date !== 'string' && data.date !== undefined) {
    throw new Error('Date must be a string.');
  }
  
  if (typeof data.serviceType !== 'string' && data.serviceType !== undefined) {
    throw new Error('Service type must be a string.');
  }
  
  if (typeof data.message !== 'string') {
    throw new Error('Message must be a string.');
  }

  // Length validation
  if (data.name.trim().length > 100) {
    throw new Error('Name must be 100 characters or less.');
  }
  
  if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    throw new Error('Email must be a valid email address.');
  }
  
  if (data.subject && data.subject.length > 200) {
    throw new Error('Subject must be 200 characters or less.');
  }
  
  if (data.phone && data.phone.length > 20) {
    throw new Error('Phone number must be 20 characters or less.');
  }
  
  if (data.serviceType && data.serviceType.length > 50) {
    throw new Error('Service type must be 50 characters or less.');
  }
  
  if (data.message.trim().length > 1000) {
    throw new Error('Message must be 1000 characters or less.');
  }

  // Sanitization - remove potentially dangerous characters
  const sanitizedData = {
    name: data.name.replace(/[<>]/g, '').trim().substring(0, 100),
    email: data.email.replace(/[<>]/g, '').trim().substring(0, 100),
    subject: data.subject ? data.subject.replace(/[<>]/g, '').trim().substring(0, 200) : '',
    phone: data.phone ? data.phone.replace(/[<>]/g, '').trim().substring(0, 20) : '',
    date: data.date ? data.date.replace(/[<>]/g, '').trim().substring(0, 20) : '',
    serviceType: data.serviceType ? data.serviceType.replace(/[<>]/g, '').trim().substring(0, 50) : 'wedding',
    message: data.message.replace(/[<>]/g, '').trim().substring(0, 1000),
  };

  return sanitizedData;
};

// Rate limiting function
const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per window

  const record = rateLimitMap.get(ip) || { count: 0, timestamp: now };
  
  if (now - record.timestamp > windowMs) {
    // Reset the counter if the window has passed
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  } else {
    // Increment the count if within the window
    if (record.count >= maxRequests) {
      return true; // Rate limited
    }
    rateLimitMap.set(ip, { count: record.count + 1, timestamp: record.timestamp });
    return false; // Not rate limited
  }
};

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check if required environment variables are present
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable');
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error('Missing CONTACT_EMAIL environment variable');
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    // Dynamically import Resend to avoid build-time initialization
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate and sanitize input
    let validatedData;
    try {
      validatedData = validateAndSanitizeInput(body);
    } catch (validationError: any) {
      return NextResponse.json(
        { error: validationError.message },
        { status: 400 }
      );
    }

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3A5A40;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${validatedData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${validatedData.email}</td>
          </tr>
          ${validatedData.phone ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${validatedData.phone}</td>
          </tr>` : ''}
          ${validatedData.date ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Date:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${validatedData.date}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Service Type:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${validatedData.serviceType}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Message:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${validatedData.message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">Sent from: ${ip} at ${new Date().toISOString()}</p>
      </div>
    `;

    try {
      // Send email via Resend
      const { data, error } = await resend.emails.send({
        from: process.env.CONTACT_EMAIL,
        to: process.env.CONTACT_EMAIL,
        subject: validatedData.subject || `New Inquiry from ${validatedData.name}`,
        html: htmlContent,
      });

      if (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
          { error: 'Failed to send message. Please try again.' },
          { status: 500 }
        );
      }

      console.log('Contact form submission processed successfully:', data?.id);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Return generic error to prevent information disclosure
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}