const http = require('http');
const express = require('express');
const path = require('path');

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
  console.log('in download');
})



var port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
