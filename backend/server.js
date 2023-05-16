require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRoute = require("./routes/user-route");
const { Connect } = require("./utils/db-connection");

app.use(express.json());
app.use(express.urlencoded({ limit: "1mb", extended: false }));

userRoute(app);

app.listen(port, async () => {
  await Connect();
  console.log(`server on port ${port}`);
});
