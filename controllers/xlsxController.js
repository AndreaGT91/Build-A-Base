const XLSX = require("xlsx");
const fs = require("fs");

module.exports = {
  convertXLSX: function(request, response) {
    if (fs.existsSync(request.body.filename)) {
      const workbook = XLSX.readFile(request.body.filename, { dateNF:'yyyy"-"mm"-"dd' });
      // For MVP, we are only handling first sheet in a multi-sheet workbook;
      // Also assuming that there is a header row
      // let result = {};
      // let sheet;
    
      // workbook.SheetNames.forEach(sheetName => {
      //   sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1, raw:false});
      //   if (sheet.length) {
      //     result[sheetName] = sheet;
      //   };
      // });
      let result = [];

      if (workbook.SheetNames.length > 0) {
        result = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header:1, raw:false});

        // First object in array is column headers. Need to ensure none begin with "$" or contain "."s
        // These will be the field names in MongoDB, and those are illegal characters
        if (result.length > 0) {
          result[0].forEach(header => {
            header = header.replace(/\./g, ""); // Remove all "."

            if (header[0] === "$") {
              header = header.substring(1); // Remove "$" if in first position
            };
          });
        };
      };

      response.json(result);
    }
    else {
      response.status(404);
    };
  }
};