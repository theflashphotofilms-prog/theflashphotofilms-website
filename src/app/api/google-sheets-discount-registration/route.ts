import { NextRequest } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function POST(request: NextRequest) {
  try {
    const { name, mobileNumber } = await request.json();
    
    // Validate input
    if (!name || !mobileNumber) {
      return Response.json(
        { error: 'Name and mobile number are required' },
        { status: 400 }
      );
    }

    // Basic validation for mobile number format
    const mobileRegex = /^[0-9+\-\s()]+$/;
    if (!mobileRegex.test(mobileNumber) || mobileNumber.length < 10) {
      return Response.json(
        { error: 'Invalid mobile number format' },
        { status: 400 }
      );
    }

    // Send data to Google Apps Script Web App
    const response = await fetch(`${process.env.GOOGLE_APPS_SCRIPT_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        mobileNumber: mobileNumber,
        timestamp: new Date().toISOString()
      })
    });

    const result = await response.json();
    
    if (!response.ok) {
      if (result.error && result.error.includes('duplicate')) {
        return Response.json(
          { error: 'This mobile number has already registered for the discount' },
          { status: 409 }
        );
      }
      throw new Error(result.error || 'Failed to register in Google Sheets');
    }

    // Return success response
    return Response.json({ 
      message: 'Registration successful', 
      discountEligibility: 'You are eligible for a 10% launch discount valid for 3 months.'
    });
  } catch (error) {
    console.error('Error registering for discount:', error);
    return Response.json(
      { error: 'Failed to register for discount' },
      { status: 500 }
    );
  }
}