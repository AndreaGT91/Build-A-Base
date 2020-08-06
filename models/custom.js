const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createModel = function(docName, model) {
  const newSchema = new Schema({}, { strict: false });

  model.forEach(field => newSchema.add(JSON.parse(`{ "${field.fieldName}": "${field.fieldType}" }`)));  
  
  return mongoose.model(docName, newSchema);
};

module.exports = createModel;