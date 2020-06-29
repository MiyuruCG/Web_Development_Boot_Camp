var express = require('express');

const app = express();

//sending an response to the browser
//the get request from the browser to "/" <- home route
//localhost:3000/
app.get("/", function (req, res) {
    res.send("<h1>Hello World</h1>");
});

//localhost:3000/contact
app.get("/contact", function (req, res) {
    res.send("Contact me .... ");
});

//localhost:3000/about
app.get("/about", function (req, res) {
    res.send("My name is Miyuru and this is my first time using node express ");
});

app.get("/school", function (req, res) {
    res.send("Schools..");
});

//listening in the port 3000
app.listen(3000, function () {
    console.log("Server started in port 3000");
});
