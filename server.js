const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const messageRouter = require("./routes/messageRouter");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs"); // folder must be named views
app.use("/", messageRouter);

// 404 errors
app.get("*", (req, res) => {
  res.render("pages/notFound");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is starting in port http://localhost:${PORT}`);
});
