const {
  get_non_checkin,
  get_chekout,
  get_unpaid_invoices,
} = require("../services/client-service");

module.exports = (app) => {
  app.get("/users/checkin", async (req, res) => {
    try {
      const users = await get_non_checkin();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/users/checkout", async (req, res) => {
    try {
      const users = await get_chekout();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/invoices/unpaid", async (req, res) => {
    try {
      const invoices = await get_unpaid_invoices();
      res.status(200).json(invoices);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};
