const { Register, Login } = require("../services/auth-service");

module.exports = (app) => {
  app.post("/sign-up", async (req, res) => {
    try {
      const token = await Register(req.body);
      res.status(200).json(token);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  app.post("/sign-in", async (req, res) => {
    try {
      const token = await Login(req.body);
      res.status(200).json(token);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};
