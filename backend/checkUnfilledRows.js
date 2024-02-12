// Function to check for unfilled rows in the 'extracurriculars' spreadsheet
function checkUnfilledRows() {
  // Get the index of the last row and last column in the 'extracurriculars' spreadsheet
  var lastRow = extracurriculars.getLastRow();
  var lastColumn = extracurriculars.getLastColumn();

  // Variable to track if all rows are filled
  var filled = true;

  // Loop through each row in the spreadsheet
  for (var row = 1; row <= lastRow; row++) {
    // Get the values of the current row
    var values = extracurriculars.getRange(row, 1, 1, lastColumn).getValues()[0];

    // Loop through each column in the row
    for (var col = 0; col < lastColumn; col++) {
      // Check if the cell is empty
      if (values[col] === '') {
        // Log an error message indicating the unfilled row
        Logger.log('ERROR: Row ' + row + ' in Extracurriculars extracurriculars is not fully filled.');
        // Update the filled variable to indicate unfilled rows
        filled = false;
      }
    }
  }
  // If any row is unfilled, return false
  if (!filled) {
    return false;
  }
  // Log a message indicating all rows are filled and return true
  Logger.log('All rows are filled.');
  return true;
}
