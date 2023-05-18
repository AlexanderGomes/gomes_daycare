const User = require("../models/user-model");
const Invoices = require("../models/invoice-model");
const Code = require("../models/code-model");

module.exports.get_non_checkin = async () => {
  try {
    const users = await User.find({ isCheckedIn: false });
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.get_chekout = async () => {
  try {
    const users = await User.find({ isCheckedIn: true });
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports.get_unpaid_invoices = async () => {
  try {
    const invoices = await Invoices.find({ isPaid: false });
    return invoices
  } catch (error) {
    throw new Error(error.message);
  }
};

