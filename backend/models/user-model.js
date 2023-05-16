const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isCheckedIn: {
    type: Boolean,
    default: false,
  },
  paidBalance: {
    type: Number,
    default: 0,
  },
  unpaidBalance: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("user", User);
