const express = require("express");
const app = express();

/**
 * Getting '/' request
 * response send @String `greeting`
 */
app.get("/", () => {
  res.send("Welcome to MetaVASP community site");
});

/**
 * Declaring port
 * Development port @ 8080
 */
const port = process.env.PORT || 8080;

// App listening @port
app.listen(port, () => {
  console.log("Application Running @", port);
});
