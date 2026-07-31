import { NextRequest, NextResponse } from 'next/server';

interface FeedbackItem {
  name: string;
  rating: number;
  feedbackMessage: string;
  timestamp: string;
}

export async function GET(request: NextRequest) {
  try {
    // Check if Google Apps Script URL is configured
    if (!process.env.GOOGLE_APPS_SCRIPT_URL) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not configured. Cannot fetch feedback.');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Fetch feedback from Google Apps Script
    const response = await fetch(`${process.env.GOOGLE_APPS_SCRIPT_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'get_feedback',
      })
    });

    if (!response.ok) {
      console.error('Error fetching feedback:', await response.text());
      return NextResponse.json(
        { error: 'Failed to fetch feedback data' },
        { status: 500 }
      );
    }

    const result = await response.json();
    
    // Sort feedback by timestamp (newest first) and limit to 20
    let feedbackList: FeedbackItem[] = Array.isArray(result.data) ? result.data : [];
    feedbackList = feedbackList
      .sort((a: FeedbackItem, b: FeedbackItem) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 20);

    return NextResponse.json({ 
      success: true,
      feedback: feedbackList 
    });
  } catch (error: any) {
    console.error('Error fetching feedback:', error);
    return NextResponse.json(
      { error: 'Failed to fetch feedback' },
      { status: 500 }
    );
  }
}