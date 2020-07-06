const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items = ["Buy food", "Cook food"];
let workItems = [];
//tells the app to use ejs as there view engine 
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (reqS, res) {

    var today = new Date();

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { listTitle: day, newListItems: items }); //look in the views folder for a file named "list"... then it will look for kindOfDay and assigns day.
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function (res, req) {
    let item = req.body.newItem;
    workItems.push(item);

    res.redirect("/work");
})

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(3000, function (req, res) {
    console.log("Server connected on port 3000");
});