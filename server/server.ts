const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World from the server!");
});
app.listen(port, function () {
  console.log("App listening on port: " + port);
});
