// Sheets in the spreadsheet
var responses = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses');
var extracurriculars = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Extracurriculars');

// Approved rows in the responses spreadsheet
var approvedRows = [];

// Column constants
var nameColumn = 5;
var approvalStatusColumn = 2;
