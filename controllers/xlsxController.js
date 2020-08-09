const XLSX = require("xlsx");
const fs = require("fs");

module.exports = {
  convertXLSX: function(request, response) {
    if (fs.existsSync(request.body.filename)) {
      const workbook = XLSX.readFile(request.body.filename, { dateNF:'yyyy"-"mm"-"dd' });
      let result = [];

      // TODO: Evaluate headers - remove "." and "$"
      // newField.fieldName = key.replace(/\./g, ""); // No "." allowed in field names
      // if (newField.fieldName[0] === "$") {
      //   newField.fieldName = newField.fieldName.substring(1); // Can't start with "$"
      // }

      
      if (workbook.SheetNames.length > 0) {
        result = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {raw:false});
      };

      response.json(result);
    }
    else {
      response.status(404);
    };
  }
};