function doPost(e) {
  try {
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Get the action to determine what operation to perform
    var action = data.action;
    
    if (action) {
      // Handle different actions based on the request
      switch(action) {
        case 'check_duplicate':
          return checkDuplicate(data);
        case 'get_registration_by_email_or_phone':
          return getRegistrationByEmailOrPhone(data);
        case 'query_coupon': // Kept for backward compatibility if needed elsewhere
        case 'update_coupon_used': // Kept for backward compatibility if needed elsewhere
          return ContentService.createTextOutput(JSON.stringify({'result': 'error', 'message': 'Action not supported in registration-only mode'})).setMimeType(ContentService.MimeType.JSON);
        default:
          // If action is provided but not recognized, handle as sheetType for backward compatibility
          return handleSheetWrite(data);
      }
    } else {
      // If no action is provided, assume it's a sheet write operation (backward compatibility)
      return handleSheetWrite(data);
    }
    
  } catch(error) {
    console.error('Error in doPost function:', error);
    return ContentService.createTextOutput(JSON.stringify({'result': 'error', 'message': error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle sheet write operations for backward compatibility
function handleSheetWrite(data) {
  // Get the sheet type to determine which sheet to write to
  var sheetType = data.sheetType;
  
  // Open the active spreadsheet (you'll need to set this to your specific spreadsheet)
  var ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID'));
```

GOOGLE_APPS_SCRIPT_CODE.gs
```javascript
<<<<<<< SEARCH
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
        case 'registrations':
          sheet = ss.getSheetByName('Registrations') || ss.insertSheet('Registrations');
          // Add headers if this is a new sheet
          if (sheet.getLastRow() === 0) {
            sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Registration Date']);
          }
          // Append the data
          sheet.appendRow([
            new Date(), // Timestamp
            data.name,
            data.email,
            data.phone,
            data.registrationDate
          ]);
          break;
          
        case 'discount_leads': // Kept for backward compatibility but deprecated
          sheet = ss.getSheetByName('Discount Leads') || ss.insertSheet('Discount Leads');
          // Add headers if this is a new sheet
          if (sheet.getLastRow() === 0) {
            sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Coupon Code', 'Date Created', 'Expires At', 'Used']);
          }
          // Append the data
          sheet.appendRow([
            new Date(), // Timestamp
            data.name,
            data.email,
            data.phone,
            data.couponCode,
            data.dateCreated,
            data.expiresAt,
            data.used || false
          ]);
          break;
          
        default:
          return ContentService.createTextOutput(JSON.stringify({'result': 'error', 'message': 'Invalid sheet type'})).setMimeType(ContentService.MimeType.JSON);
      }
      
      // Return success response
      return ContentService.createTextOutput(JSON.stringify({'result': 'success', 'message': 'Data saved successfully'})).setMimeType(ContentService.MimeType.JSON);
}
    
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

// Check if email or phone already exists in registrations sheet
function checkDuplicate(data) {
  var email = data.email ? data.email.toLowerCase().trim() : null;
  var phone = data.phone ? data.phone.trim() : null;
  
  if (!email && !phone) {
    return ContentService.createTextOutput(JSON.stringify({ exists: false })).setMimeType(ContentService.MimeType.JSON);
  }
  
  var ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID'));
  var sheet = ss.getSheetByName('Registrations');
  
  if (!sheet) {
    // If the sheet doesn't exist, no duplicates exist yet
    return ContentService.createTextOutput(JSON.stringify({ exists: false })).setMimeType(ContentService.MimeType.JSON);
  }
  
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) { // If only header row exists
    return ContentService.createTextOutput(JSON.stringify({ exists: false })).setMimeType(ContentService.MimeType.JSON);
  }
  
  // Get all data from the sheet (assuming columns: A=Timestamp, B=Name, C=Email, D=Phone, E=Registration Date)
  var values = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();
  
  for (var i = 0; i < values.length; i++) {
    var row = values[i];
    var existingEmail = row[2] ? row[2].toString().toLowerCase().trim() : null; // Column C
    var existingPhone = row[3] ? row[3].toString().trim() : null; // Column D
    
    if ((email && existingEmail === email) || (phone && existingPhone === phone)) {
      return ContentService.createTextOutput(JSON.stringify({ 
        exists: true 
      })).setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify({ exists: false })).setMimeType(ContentService.MimeType.JSON);
}

// Get registration by email or phone
function getRegistrationByEmailOrPhone(data) {
  var email = data.email ? data.email.toLowerCase().trim() : null;
  var phone = data.phone ? data.phone.trim() : null;
  
  if (!email && !phone) {
    return ContentService.createTextOutput(JSON.stringify({ registration: null })).setMimeType(ContentService.MimeType.JSON);
  }
  
  var ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID'));
  var sheet = ss.getSheetByName('Registrations');
  
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({ registration: null })).setMimeType(ContentService.MimeType.JSON);
  }
  
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) { // If only header row exists
    return ContentService.createTextOutput(JSON.stringify({ registration: null })).setMimeType(ContentService.MimeType.JSON);
  }
  
  // Get all data from the sheet (assuming columns: A=Timestamp, B=Name, C=Email, D=Phone, E=Registration Date)
  var values = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();
  
  for (var i = 0; i < values.length; i++) {
    var row = values[i];
    var existingEmail = row[2] ? row[2].toString().toLowerCase().trim() : null; // Column C
    var existingPhone = row[3] ? row[3].toString().trim() : null; // Column D
    
    if ((email && existingEmail === email) || (phone && existingPhone === phone)) {
      var registration = {
        name: row[1], // Column B
        email: row[2], // Column C
        phone: row[3], // Column D
        registrationDate: row[4] // Column E
      };
      
      return ContentService.createTextOutput(JSON.stringify({ registration: registration })).setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify({ registration: null })).setMimeType(ContentService.MimeType.JSON);
}

// Optional: doGet function for testing
function doGet(e) {
  return ContentService.createTextOutput("Google Apps Script is running. Use POST method to send data.");
}