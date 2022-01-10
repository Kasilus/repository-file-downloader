const http = require('http');
const express = require('express');
const path = require('path');
const axios = require('axios');
const fs = require('fs');

const modules = require('./modules.js');
const dir = './tmp';

let app = express();

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

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
  console.log('start download');
  const modules_info = req.body;
  const urls = [];
  for (let i = 0; i < modules_info.modules_module.length; i++) {
    const full_submodule_name = modules_info.modules_submodule[i] != ''
    ? modules_info.modules_module[i] + '-' + modules_info.modules_submodule[i]
    : modules_info.modules_module[i];
    let url_prefix = modules.url + '/' + modules_info.modules_module[i]
    + '/' + full_submodule_name
    + '/' + modules_info.modules_version[i]
    + '/' + full_submodule_name + '-' + modules_info.modules_version[i];
    let url;
    for (let j = 0; j < modules.extensions.length; j++) {
      url = (' ' + url_prefix).slice(1) + '.' + modules.extensions[j];
      urls.push(url);
    }
  }

  console.log(urls);

  for (let i = 0; i < urls.length; i++) {
    axios({
      method: 'get',
      url: urls[i],
      responseType: 'stream'
    }).then(function (response) {
      console.log('in then with url: ' + urls[i]);
      response.data.pipe(fs.createWriteStream("./tmp/" + urls[i].substring(urls[i].lastIndexOf('/'))));
    }).catch(function (error) {
      console.log('in error with url: ' + urls[i]);
    });
  }

  console.log('end download');
});

const sleepRequest = (milliseconds, originalRequest) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(axios(originalRequest)), milliseconds);
    });
};

axios.interceptors.response.use(
  response => response,
  (error) => {

    var currentdate = new Date();

    console.log('error [TIMESTAMP, URL] = [' + currentdate + ', ' +  error.config.url + ']');
    const originalRequest = error.config;
    if (originalRequest && error.response && error.response.status === 404) {
      return sleepRequest(1000 * 60 * 30, originalRequest);
    } else {
      return Promise.reject(error);
    }
});

var port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
