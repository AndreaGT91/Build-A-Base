const XLSX = require("xlsx");
const fs = require("fs");

module.exports = {
  convertXLSX: function(request, response) {
    if (fs.existsSync(request.body.filename)) {
      const workbook = XLSX.readFile(request.body.filename, { dateNF:'yyyy"-"mm"-"dd' });
      let result = [];
      
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