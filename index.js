const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(cookieParser());

const PORT = 3000;

app.get("/light-mode", (req, res) => {
  res.cookie("theme", "dark-mode");
});
app.get("/dark-mode", (req, res) => {
  res.cookie("theme", "light-mode");
});
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
