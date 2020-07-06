const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//tells the app to use ejs as there view engine 
app.set('view engine', 'ejs');


app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    console.log(today.getDate());


    // if (today.getDay() === 0) {
    //     //res.send("<h1>Its weekend</h1>");
    //     day = "Sunday";

    // } else if (current === 1) {
    //     day = "Monday";
    // } else if (current === 2) {
    //     day = "Tuesday";
    // } else if (current === 3) {
    //     day = "Wednesday";
    // } else if (current === 4) {
    //     day = "Thursday";
    // } else if (current === 5) {
    //     day = "Friday";
    // } else if (current === 7) {
    //     // res.write("<h1>Today is a weekday</h1>");
    //     // res.write("<p>It is not the weekend</p>");
    //     //res.send();
    //     // res.sendFile(__dirname + "/index.html");

    //     day = "Saturday";

    // }

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            console.log("Error >> date :" + currentDay);
            break;
        default:
            console.log("Error >> date :" + currentDay);
            break;
    }

    res.render("list", { kindOfDay: day }); //look in the views folder for a file named "list"... then it will look for kindOfDay and assigns day.
});

app.listen(3000, function (req, res) {
    console.log("Server connected on port 3000");
});