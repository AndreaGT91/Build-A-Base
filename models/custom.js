const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function createModel(docName, model) {
  const newSchema = new Schema({}, { strict: false })

  model.forEach(field => {
    let fieldDef = `{ ${field.fieldName}: ${field.fieldType}}`;
  // TODO: Strings or objects??? Which will work???
  //   const fn = field.fieldName;
  //   const ft = field.fieldType;
  //   let fieldDef = { fn: ft };
  newSchema.add(fieldDef);  
  });
  
  return mongoose.model(docName, newSchema);
};

module.exports = createModel;