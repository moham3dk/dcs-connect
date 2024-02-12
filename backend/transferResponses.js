// Function to transfer approved extracurricular responses to a database
function transferResponses() {
  // Log a message indicating the transfer process has begun
  Logger.log('Transferring Responses...');

  // Get the range of responses
  var range = responses.getDataRange();

  // Get the values within the range
  var values = range.getValues();

  // Array to store indices of approved extracurriculars
  var approvedExtracurriculars = [];

  // Loop through each row of values
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    // Check if the approval status of the extracurricular is "Approved"
    if (row[approvalStatusColumn - 1] === 'Approved') {
      // Update the approval status of the extracurricular
      row[approvalStatusColumn - 1] = 'Sent to Database';

      // Add the index of the approved extracurricular to the array
      approvedExtracurriculars.push(i + 1);

      // Log a message indicating the approved extracurricular is being added to the database
      Logger.log('Row ' + i + ' is approved. Adding to database.');

      // Extract relevant information from the row
      var title = row[4];
      var link = row[5];
      var description = row[6];
      var tags = row.slice(7, 12).join(', ');
      var location = row[12];
      var contact = row.slice(13, 16).join(' - ');

      // Append the extracted information to the extracurriculars sheet
      extracurriculars.appendRow([title, link, description, tags, location, contact]);
    } else {
      // Log a message indicating the extracurricular has not been approved yet
      Logger.log('Row ' + i + ' has not been approved yet or is already in the database.');
    }
  }

  // Log the approved extracurriculars
  Logger.log('Approved extracurriculars: ' + approvedExtracurriculars);

  // Set the values of the original range to the new valuess
  range.setValues(values);

  // If every row is filled, commit to Github
  if (checkUnfilledRows()) {
    commitToGithub();
  }
}
