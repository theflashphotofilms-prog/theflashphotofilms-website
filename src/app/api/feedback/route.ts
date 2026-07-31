import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      rating,
      feedbackMessage,
      timestamp,
      source
    } = await request.json();
    
    // Validate required inputs
    if (!name || !rating || !feedbackMessage) {
      return NextResponse.json(
        { error: 'Name, Rating, and Feedback Message are required' },
        { status: 400 }
      );
    }

    // Validate rating is between 1 and 5
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    // Check if Google Apps Script URL is configured
    if (!process.env.GOOGLE_APPS_SCRIPT_URL) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not configured. Feedback data will not be saved to Google Sheets.');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare data for Google Sheets
    const feedbackData = {
      sheetType: 'feedback',
      name: name,
      rating: rating,
      feedbackMessage: feedbackMessage,
      timestamp: timestamp || new Date().toISOString(),
      source: source || 'feedback_form'
    };

    // Log data being sent to Google Sheets for debugging
    console.log('Sending feedback data to Google Sheets:', feedbackData);

    // Send data to Google Apps Script Web App for Google Sheets storage
    const googleSheetsResponse = await fetch(`${process.env.GOOGLE_APPS_SCRIPT_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData)
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
      
      console.error('Error saving feedback to Google Sheets:', errorData);
      return NextResponse.json(
        { error: 'Failed to save feedback data' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({ 
      success: true,
      message: 'Feedback submitted successfully!'
    });
  } catch (error: any) {
    console.error('Error processing feedback:', error);
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}