const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const app = express();

// taking port from env file
const PORT = process.env.PORT;

// middleware
app.use(morgan("dev"));

// listening port
app.listen(PORT, () => {
  console.log("Running express server on port 4000");
});
