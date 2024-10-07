let messages = require("./messageData.js");

module.exports = {
  displayAllMessage: (req, res) => {
    res.render("index", {
      title: "Mini Messageboard",
      messages: messages,
    });
  },
  displayNewMessage: (req, res) => {
    res.render("form");
  },
  getMessage: (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
  },
};
