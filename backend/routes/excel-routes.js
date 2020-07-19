// const XLSX = require("xlsx");
import XLSX from "xlsx";
import fs from "fs";

module.exports = function (workbookName) {

  function to_json(workbook) {
    let result = {};
    let sheet;
    workbook.SheetNames.forEach(function(sheetName) {
      sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1});
      if (sheet.length) result[sheetName] = sheet;
    });
    return JSON.stringify(result, null, 2);
  };

  return XLSX.readFile("../sample-data/1010-Sample-Information.xlsx");

  // if (fs.existsSync(workbookName)) {
  //   return to_json(XLSX.readFile(workbookName));
  // }
  // else {
  //   return [];
  // };
};