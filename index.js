const http = require('http');
const express = require('express');
const path = require('path');
const axios = require('axios');

const modules = require('./modules.js');

let app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

app.set('views', path.join(__dirname, 'templates'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
        modules: modules.modules
    });
});

app.post("/download", (req, res) => {
  const modules_info = req.body;
  const length = modules_info.modules_module.length;
  const urls = [];
  for (let i = 0; i < length; i++) {
    const full_submodule_name = modules_info.modules_module[i] + '-' + modules_info.modules_submodule[i];
    let url = modules.url + '/' + modules_info.modules_module[i]
    + '/' + full_submodule_name
    + '/' + modules_info.modules_version[i]
    + '/' + full_submodule_name + '-' + modules_info.modules_version[i] + '.jar';
    urls.push(url);
  }
  console.log(urls);
});

var port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
