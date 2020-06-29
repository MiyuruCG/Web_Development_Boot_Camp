const express = require('express');
const bodyParse = require('body-parser');

const app = express();
app.use(bodyParse.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    //console.log(__dirname);
});

app.post("/", function (req, res) {

    //console.log(req.body.num1);

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var tot = num1 + num2;

    res.send("Result of calculation is : " + tot);
});

app.listen(3000, function () {
    console.log("App is listening in port 3000");
});