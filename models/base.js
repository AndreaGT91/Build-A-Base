const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const baseSchema = new Schema({
  creatorID: { type: Number, required: true },
  baseName: { type: String, required: true },
  users: [{
    userID: Number,
    admin: Boolean,
    editor: Boolean
  }]
});

const Bases = mongoose.model("Bases", baseSchema);

module.exports = Bases;
