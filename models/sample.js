const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sampleSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Sample = mongoose.model("Sample", sampleSchema);

module.exports = Sample;
