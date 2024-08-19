function transferResponses() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var responsesSheet = spreadsheet.getActiveSheet();
  var extracurricularsSheet;

  switch (responsesSheet.getName()) {
    case sciotoFormResponses.getName():
      extracurricularsSheet = sciotoExtracurriculars;
      break;
    case coffmanFormResponses.getName():
      extracurricularsSheet = coffmanExtracurriculars;
      break;
    case jeromeFormResponses.getName():
      extracurricularsSheet = jeromeExtracurriculars;
      break;
    default:
      Logger.log('Unknown sheet: ' + responsesSheet.getName());
      return;
  }

  Logger.log('Transferring Responses...');
  var range = responsesSheet.getDataRange();
  var values = range.getValues();
  var approvedExtracurriculars = [];

  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    if (row[approvalRow] === 'Approved') {
      row[approvalRow] = 'Sent to Database';
      approvedExtracurriculars.push(i + 1);
      Logger.log('Row ' + (i + 1) + ' is approved. Adding to database.');

      var title = row[extracurricularNameRow];
      var link = row[extracurricularLinkRow];
      var description = row[extracurricularDescriptionRow];
      var tags = row.slice(gradeLevelRow, extracurricularLocationRow).join(', ');
      var location = row[extracurricularLocationRow];
      var contact = row.slice(contactNameRow, contactPhoneRow + 1).join(' - ');

      extracurricularsSheet.appendRow([title, link, description, tags, location, contact]);
    } else {
      Logger.log('Row ' + (i + 1) + ' has not been approved yet.');
    }
  }

  Logger.log('Approved extracurriculars: ' + approvedExtracurriculars.join(', '));
  range.setValues(values);

  if (checkUnfilledRows(extracurricularsSheet)) {
    commitToGitHub(extracurricularsSheet);
  }
}
