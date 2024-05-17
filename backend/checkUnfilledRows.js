function checkUnfilledRows(sheet) {
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  var filled = true;

  for (var row = 1; row <= lastRow; row++) {
    var values = sheet.getRange(row, 1, 1, lastColumn).getValues()[0];
    
    for (var col = 0; col < lastColumn; col++) {
      if (values[col] === "") {
        Logger.log("ERROR: Row " + row + " in " + sheet.getName() + " is not fully filled.");
        filled = false;
      }
    }
  }
  if (!filled) {
    return false;
  }
  Logger.log("All rows are filled.")
  return true;
}