const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true, maxlength: 256 },
  description: { type: String, required: true, maxlength: 2048 },
  position: { type: String, required: true, maxlength: 256 },
  technology: { type: String, required: true, maxlength: 256 }
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
