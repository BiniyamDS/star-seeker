const express = require("express");
const axios = require("axios");

const app = express();
const baseURL = "https://api.github.com/search/repositories";
const filterURL = "&sort=stars&order=desc&per_page=10";
app.use(express.static("./public"));
// app.use(express.urlencoded({ extended: false }));

app.get("/api/stars", (req, res) => {
  const { start, end } = req.query;
  const fullURL = `${baseURL}?q=created:${start}..${end}${filterURL}`;
  const getRepos = async () => {
    try {
      const response = await axios.get(fullURL);
      const { items } = response.data;
      let res_data = [];
      items.forEach((element) => {
        console.log(element.name, element.stargazers_count);
        res_data.push({ title: element.name, count: element.stargazers_count });
      });
      res.json({ success: true, data: res_data });
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };
  getRepos();
});
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
