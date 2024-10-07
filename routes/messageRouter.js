const express = require("express");
const messageRouter = express.Router();
const messageController = require("../controllers/messageController");

messageRouter.get("/", messageController.displayAllMessage);
messageRouter.get("/new", messageController.displayNewMessage);
messageRouter.post("/new", messageController.getMessage);

module.exports = messageRouter;
