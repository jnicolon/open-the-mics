const { model, Schema } = require("mongoose");

const micSchema = new Schema({
  name: String,
  host: String,
  description: String,
  date: String,
  totalComedians: Number,
  comedians: Array,
  hostUrl: String,
});

module.exports = model("Mic", micSchema);
