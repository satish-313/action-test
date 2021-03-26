const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.send("hello from root page");
});

app.get("/test", (req, res) => {
  res.send("hello again from test");
});

app.get("/prod", (req, res) => {
  res.send("hello from prod page");
});

app.listen(3000, () => console.log("server is running on port : 3000"));
