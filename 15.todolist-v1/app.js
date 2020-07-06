const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get("/", function (req, res) {

    var today = new Date();

    if (today.getDay() == 6 || today.getDay() === 0) {
        res.send("<h1>Its weekend</h1>");
    } else {
        // res.write("<h1>Today is a weekday</h1>");
        // res.write("<p>It is not the weekend</p>");
        //res.send();

        res.sendFile(__dirname + "/index.html");
    }

});

app.listen(3000, function (req, res) {
    console.log("Server connected on port 3000");
});