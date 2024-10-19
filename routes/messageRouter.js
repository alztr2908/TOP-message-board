const express = require("express");
const messageRouter = express.Router();
const messageController = require("../controllers/messageController");

messageRouter.get("/", messageController.displayAllMessage);
messageRouter.get("/new", messageController.displayCreateMessage);
messageRouter.post("/new", messageController.postCreateMessage);
messageRouter.get(
  "/message/:messageId",
  messageController.displaySingleMessage
);

messageRouter.delete("/delete", messageController.deleteAllMessage);

module.exports = messageRouter;
