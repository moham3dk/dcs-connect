// Function to handle form responses
function handleFormResponses(range) {
  // Get the row and column of the edited cell
  var editedRow = range.getRow();
  var editedColumn = range.getColumn();

  // Get the index of the last column in the range
  var lastColumn = range.getLastColumn();

  // Get the values of the edited row from the 'responses' sheet
  var rowValues = responses.getRange(editedRow, 1, 1, lastColumn).getValues()[0];

  // Check if the edited row is empty
  if (rowValues.every((value) => value === '')) {
    // Log a message indicating the row is empty and likely deleted, then exit the function
    Logger.log('Row is empty. Likely deleted. Ignore.');
    return;
  } else if (editedRow == 1) {
    // Log a message indicating the first row was edited, then exit the function
    Logger.log('First row was edited. Ignore.');
    return;
  } else {
    // Get the range of the third column (approval status) from the 'responses' sheet
    var thirdColumnRange = responses.getRange(editedRow, approvalStatusColumn);
    // Check if the extracurricular is approved
    if (thirdColumnRange.getValue() == 'Approved') {
      // If the edited column is the approval status column
      if (editedColumn == approvalStatusColumn) {
        // Log a message indicating the extracurricular was approved
        console.log(
          'Extracurricular by the name of ' + responses.getRange(editedRow, nameColumn).getValue() + ' was approved.'
        );
      } else {
        // If any other value was changed, unapprove the extracurricular
        thirdColumnRange.setValue('');
        // Log a message indicating the extracurricular was unapproved
        Logger.log(
          'Extracurricular by the name of ' +
            responses.getRange(editedRow, nameColumn).getValue() +
            ' was unapproved as one of the values was changed.'
        );
      }
    } else {
      // Log a message indicating the extracurricular has not been approved yet
      Logger.log('The extracurricular has not been approved yet.');
    }
  }
}
