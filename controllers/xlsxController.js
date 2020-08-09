const XLSX = require("xlsx");
const fs = require("fs");

module.exports = {
  convertXLSX: function(request, response) {
    if (fs.existsSync(request.body.filename)) {
      const workbook = XLSX.readFile(request.body.filename, { dateNF:'mm"/"dd"/"yyyy' });
      let result = {};
      let sheet;
    
      workbook.SheetNames.forEach(sheetName => {
        sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1, raw:false});
        if (sheet.length) {
          result[sheetName] = sheet;
        };
      });

      response.JSON(result);
    }
    else {
      response.status(404);
    };
  }
};