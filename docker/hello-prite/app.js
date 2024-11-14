require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Prite Dey");
});

app.listen(PORT, () => {
  console.log(`App is started at http://localhost:${PORT}`);
});
