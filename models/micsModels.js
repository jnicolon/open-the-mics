const { model, Schema } = require("mongoose");

const micSchema = new Schema({
  micName: String,
  hostName: String,
  notes: String,
  date: String,
  capacity: Number,
  comedians: Array,
  hostUrl: String,
  adress: String,
  city: String,
  postal: String,
  venue: String,
});

module.exports = model("Mic", micSchema);
