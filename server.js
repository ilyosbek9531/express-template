const express = require("express");
require("dotenv").config();
const app = express();

// taking port from env file
const PORT = process.env.PORT;

// listening port
app.listen(PORT, () => {
  console.log("Running express server on port 4000");
});
