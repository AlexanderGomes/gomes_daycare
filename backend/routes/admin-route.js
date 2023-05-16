const {
  CreateCode,
  CheckIn,
  CheckOut,
  Late,
  DeleteInvoice,
} = require("../services/admin-service");

module.exports = (app) => {
  app.post("/code/create", async (req, res) => {
    try {
      const code = await CreateCode();
      res.status(200).json(code.code);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  app.post("/check-in", async (req, res) => {
    try {
      const user = await CheckIn(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  app.post("/check-out", async (req, res) => {
    try {
      const user = await CheckOut(req.body.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  app.post("/late", async (req, res) => {
    try {
      const lateInvoice = await Late(req.body);
      res.status(200).json(lateInvoice);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  app.delete("/invoice/delete", async (req, res) => {
    try {
      const message = await DeleteInvoice(req.body.invoiceId);
      res.status(200).json(message);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
};
