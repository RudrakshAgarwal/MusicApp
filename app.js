const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get("/", function (res, req) {
    req.render("index");
});

app.listen(port, function () {
    console.log("Server Started on port: ", port);
});