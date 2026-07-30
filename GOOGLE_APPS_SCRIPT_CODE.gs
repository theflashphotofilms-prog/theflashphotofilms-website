function doPost(e) {
  try {
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Get the sheet type to determine which sheet to write to
    var sheetType = data.sheetType;
    
    // Open the active spreadsheet (you'll need to set this to your specific spreadsheet)
    var ss = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID_HERE'); // Replace with your actual Google Sheet ID
    
    var sheet;
    
    // Determine which sheet to use based on the sheetType
    switch(sheetType) {
      case 'contact_leads':
        sheet = ss.getSheetByName('Contact Leads') || ss.insertSheet('Contact Leads');
        // Add headers if this is a new sheet
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Phone', 'Service', 'Wedding Date', 'Message']);
        }
        // Append the data
        sheet.appendRow([
          new Date(), // Timestamp
          data.fullName,
          data.email,
          data.phone,
          data.service,
          data.weddingDate,
          data.message
        ]);
        break;
        
      case 'booking_requests':
        sheet = ss.getSheetByName('Booking Requests') || ss.insertSheet('Booking Requests');
        // Add headers if this is a new sheet
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Event Type', 'Event Date', 'Package', 'Coupon Code', 'Notes', 'Original Price', 'Discount Applied', 'Final Price', 'Coupon Valid']);
        }
        // Append the data
        sheet.appendRow([
          new Date(), // Timestamp
          data.fullName,
          data.email,
          data.phone,
          data.eventType,
          data.eventDate,
          data.package,
          data.couponCode,
          data.notes,
          data.originalPrice,
          data.discountApplied,
          data.finalPrice,
          data.couponValid
        ]);
        break;
        
      case 'discount_leads':
        sheet = ss.getSheetByName('Discount Leads') || ss.insertSheet('Discount Leads');
        // Add headers if this is a new sheet
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Coupon Code', 'Date Created']);
        }
        // Append the data
        sheet.appendRow([
          new Date(), // Timestamp
          data.name,
          data.email,
          data.phone,
          data.couponCode,
          data.dateCreated
        ]);
        break;
        
      default:
        return ContentService.createTextOutput(JSON.stringify({'result': 'error', 'message': 'Invalid sheet type'})).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({'result': 'success', 'message': 'Data saved successfully'})).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    console.error('Error in doPost function:', error);
    return ContentService.createTextOutput(JSON.stringify({'result': 'error', 'message': error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: doGet function for testing
function doGet(e) {
  return ContentService.createTextOutput("Google Apps Script is running. Use POST method to send data.");
}