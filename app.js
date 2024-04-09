const express = require("express");

const app = express();

app.use(express.static("./public"));
// app.use(express.urlencoded({ extended: false }));

app.get("/api/stars", (req, res) => {
  const { start, stop } = req.query;
  console.log(start, stop);
  
  res.json({ success: true, data: [] });
});
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
