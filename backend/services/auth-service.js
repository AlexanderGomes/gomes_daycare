const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.Register = async (data) => {
  const { email, password, name } = data;

  try {
    const is_email_taken = await User.findOne({ email: email });

    if (is_email_taken) {
      throw new Error("Email is taken");
    }

    let salt = await bcrypt.genSalt(10);
    let userPassword = await bcrypt.hash(password, salt);

    const existingUser = await User.create({
      email,
      password: userPassword,
      name,
    });

    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT);

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.Login = async (data) => {
  const { password, email } = data;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new Error("wrong email");
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
      throw new Error("wrong password");
    }

    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT);

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};
