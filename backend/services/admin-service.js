const User = require("../models/user-model");
const Code = require("../models/code-model");
const Invoice = require("../models/invoice-model");

const {
  generateRandomCode,
  calculatePrice,
  getFormattedDate,
} = require("../utils/index");

module.exports.CreateCode = async () => {
  try {
    const random_code = generateRandomCode();

    const existingCode = await Code.create({ code: random_code });

    return existingCode;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.CheckIn = async (data) => {
  const { userId, kids } = data;

  const currentPrice = calculatePrice(kids, false);
  const currentDate = getFormattedDate();

  const isAlreadyCheckIn = await Invoice.findOne({
    $and: [{ lastCheckInDate: { $eq: currentDate } }, { isLate: false }],
  });

  if (isAlreadyCheckIn) {
    throw new Error("client has been cheked-in for today");
  }

  try {
    await Invoice.create({
      kids,
      price: currentPrice,
      userId,
      lastCheckInDate: currentDate,
    });

    const updatedPrice = await this.GetUnPaidInvoices(userId);

    const updated_user = await User.findByIdAndUpdate(
      userId,
      {
        $set: { isCheckedIn: true, unpaidBalance: updatedPrice },
      },
      { new: true }
    );

    return updated_user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.CheckOut = async (userId) => {
  try {
    const updated_user = await User.findByIdAndUpdate(
      userId,
      {
        $set: { isCheckedIn: false },
      },
      { new: true }
    );
    return updated_user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.Late = async (data) => {
  const { userId, kids } = data;

  const currentDate = getFormattedDate();

  const isAlreadyLate = await Invoice.findOne({
    $and: [{ lastCheckInDate: { $eq: currentDate } }, { isLate: true }],
  });

  if (isAlreadyLate) {
    throw new Error("client has been marked late today");
  }

  try {
    const currentPrice = calculatePrice(kids, true);
    await Invoice.create({
      userId,
      price: currentPrice,
      isLate: true,
      kids,
      lastCheckInDate: currentDate,
    });

    const updatedPrice = await this.GetUnPaidInvoices(userId);

    const updated_user = await User.findByIdAndUpdate(
      userId,
      {
        $set: { unpaidBalance: updatedPrice },
      },
      { new: true }
    );

    return updated_user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.DeleteInvoice = async (invoiceId) => {
  try {
    await Invoice.findByIdAndDelete(invoiceId);
    return "invoice deleted";
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.GetPaidInvoices = async (userId) => {
  try {
    const invoices = await Invoice.find({ userId: userId, isPaid: true });
    const totalPrice = invoices.reduce(
      (sum, invoice) => sum + invoice.price,
      0
    );
    return totalPrice;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.GetUnPaidInvoices = async (userId) => {
  try {
    const invoices = await Invoice.find({ userId: userId, isPaid: false });
    const totalPrice = await invoices.reduce(
      (sum, invoice) => sum + invoice.price,
      0
    );
    return totalPrice;
  } catch (error) {
    throw new Error(error.message);
  }
};
