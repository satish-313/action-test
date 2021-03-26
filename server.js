const express = require("express");

app = express();

app.get("/api", (req, res) => {
  res.send("hello from root page");
});

app.get("/api/test", (req, res) => {
  res.send("hello again from test");
});

app.get("/api/prod", (req, res) => {
  res.send("hello from prod page");
});

app.listen(3000, () => console.log("server is running on port : 3000"));
