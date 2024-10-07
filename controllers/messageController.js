let messages = require("./messageData.js");

module.exports = {
  displayAllMessage: (req, res) => {
    res.render("pages/index", {
      title: "Mini Messageboard",
      messages: messages,
    });
  },
  displaySingleMessage: (req, res, next) => {
    const id = parseInt(req.params.messageId);
    const message = messages.find((m) => m.id === id);

    if (message) {
      res.render("pages/message", {
        message,
      });
    } else {
      next();
    }
  },
  displayNewMessage: (req, res) => {
    res.render("pages/form");
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
