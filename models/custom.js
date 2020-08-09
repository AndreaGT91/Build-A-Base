const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createCustom = function(collectionName, model) {
  const newSchema = new Schema({}, { strict: false });

  console.log("createCustom.model: ", model);
  model.forEach(field => newSchema.add(JSON.parse(`{ "${field.fieldName}": "${field.fieldType}" }`)));  
  
  return mongoose.model(collectionName, newSchema);
};

module.exports = createCustom;