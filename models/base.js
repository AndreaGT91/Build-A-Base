const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const baseSchema = new Schema({
  creatorID: { type: Number, required: true },
  baseName: { type: String, required: true },
  schema: [{
    fieldName: String,
    fieldType: { 
      type: String,
      enum: ["String", "Number", "Date", "Boolean"] }
  }]
});

const Bases = mongoose.model("Bases", baseSchema);

module.exports = Bases;
