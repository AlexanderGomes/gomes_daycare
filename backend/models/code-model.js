const mongoose = require("mongoose");

const Code = mongoose.Schema({
  code: String,
});

module.exports = mongoose.model("code", Code);
