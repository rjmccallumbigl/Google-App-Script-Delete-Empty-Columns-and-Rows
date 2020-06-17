//Delete empty columns

function removeEmptyColumns() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var allsheets = ss.getSheets();
  for (var s in allsheets){
    var sheet = allsheets[s];
    var maxColumns = sheet.getMaxColumns(); 
    var lastColumn = sheet.getLastColumn();
    if (maxColumns - lastColumn != 0){
      sheet.deleteColumns(lastColumn + 1, maxColumns - lastColumn);
    }
  }
}

//Delete empty rows
function removeEmptyRows() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var allsheets = ss.getSheets();
  for (var s in allsheets){
    var sheet=allsheets[s];
    var maxRows = sheet.getMaxRows(); 
    var lastRow = sheet.getLastRow();
    if (maxRows - lastRow > 1){
      sheet.deleteRows(lastRow + 1, maxRows - lastRow);
    }
  }
}
