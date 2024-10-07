const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

app.set("view engine", "ejs"); // folder must be named views

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is starting in port http://localhost:${PORT}`);
});
