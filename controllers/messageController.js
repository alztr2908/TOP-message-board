// let messages = require("./messageData.js");
const db = require("../db/queries");

module.exports = {
  displayAllMessage: async (req, res) => {
    const messages = await db.getAllMessage();

    res.render("pages/index", {
      title: "Mini Messageboard",
      messages: messages,
    });
  },
  displaySingleMessage: async (req, res, next) => {
    const id = parseInt(req.params.messageId);
    const messageArray = await db.getSingleMessage(id);
    const message = messageArray[0];

    if (message) {
      res.render("pages/message", {
        message,
      });
    } else {
      next();
    }
  },
  displayCreateMessage: (req, res) => {
    res.render("pages/form");
  },
  postCreateMessage: async (req, res) => {
    const message = req.body;
    const added = new Date();
    message["added"] = added.toString();
    await db.insertMessage(message);
    console.log("Messages has been added");
    res.redirect("/");
  },
  deleteAllMessage: async (req, res) => {
    const messages = await db.deleteAllMessage();
    console.log("All rows in messages table has been deleted");
    res.redirect("/");
  },
};
