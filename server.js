const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const messageRouter = require("./routes/messageRouter");

app.set("view engine", "ejs"); // folder must be named views

app.use("/", messageRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is starting in port http://localhost:${PORT}`);
});
