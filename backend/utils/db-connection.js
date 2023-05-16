const mongoose = require("mongoose");
const key = process.env.DB__KEY;

module.exports.Connect = async () => {
  try {
    await mongoose.connect(key, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db Connected");
  } catch (error) {
    console.log("Error ============");
    console.log(error);
    process.exit(1);
  }
};
