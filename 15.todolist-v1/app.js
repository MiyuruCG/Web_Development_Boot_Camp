const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items = ["Buy food", "Cook food"];
//tells the app to use ejs as there view engine 
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (reqS, res) {

    var today = new Date();

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: day, newListItems: items }); //look in the views folder for a file named "list"... then it will look for kindOfDay and assigns day.
});

app.post("/", function (req, res) {

    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");

});


app.listen(3000, function (req, res) {
    console.log("Server connected on port 3000");
});