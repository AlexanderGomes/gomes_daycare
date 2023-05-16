const mongoose = require("mongoose");

const Invoice = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  price: {
    type: Number,
    default: 0,
  },
  kids: {
    type: Number,
    default: 1,
  },
  isLate: {
    type: Boolean,
    default: false,
  },
  lastCheckInDate: {
    type: String,
    default: "",
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  date: String,
});

module.exports = mongoose.model("invoice", Invoice);
