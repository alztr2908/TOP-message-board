let messages = require("./messageData.js");

module.exports = {
  displayAllMessage: (req, res) => {
    res.render("index", {
      title: "Mini Messageboard",
      messages: messages,
    });
  },
  displaySingleMessage: (req, res, next) => {
    const id = parseInt(req.params.messageId);
    const message = messages.find((m) => m.id === id);

    if (message) {
      res.render("message", {
        message,
      });
    } else {
      next();
    }
  },
  displayNewMessage: (req, res) => {
    res.render("form");
  },
  getMessage: (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
    messages.push({
      text: messageText,
      user: messageUser,
      added: new Date(),
      id: messages.length + 1,
    });
    res.redirect("/");
  },
};
