// Function triggered when a cell is edited
function onEdit(e) {
  // Log a message indicating an edit was made
  Logger.log('Edit was made!');

  // Get the range of the edited cell
  var range = e.range;
  // Get the sheet where the cell was edited
  var editedSheet = range.getSheet();

  // Check if the edited sheet is "Extracurriculars"
  if (editedSheet.getName() == 'Extracurriculars') {
    // If every row is filled, commit to Github
    if (checkUnfilledRows()) {
      commitToGithub();
    }
  } else if (editedSheet.getName() == 'Form Responses') {
    // If the edited sheet is "Form Responses", handle the form responses
    handleFormResponses(range, editedSheet);
  }
}
