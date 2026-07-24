// ... existing code ...
// OLD FILE - DEPRECATED
// This file has been deprecated in favor of Google Sheets integration
// See /api/google-sheets-discount-registration/route.ts for the new implementation

export async function POST() {
  return Response.json(
    { error: 'This endpoint has been deprecated. Use /api/google-sheets-discount-registration instead.' },
    { status: 410 } // Gone status
  );
}

export async function GET() {
  return Response.json(
    { error: 'This endpoint has been deprecated. Use /api/google-sheets-discount-registration instead.' },
    { status: 410 } // Gone status
  );
}