const http = require('http');
const express = require('express');
const path = require('path');

const modules = require('./modules.js');

let app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set("view engine", "ejs");

console.log(modules);

app.get("/", (req, res) => {
  res.render("index", {
        modules: modules.modules,
        user: {
          name: 'John Doe'
        }
    });
})

var port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
