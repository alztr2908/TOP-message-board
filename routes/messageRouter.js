const express = require("express");
const messageRouter = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

messageRouter.get("/", (req, res) => {
  res.render("index");
});

module.exports = messageRouter;
