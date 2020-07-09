const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", ejs);

app.use(bodyParser.urlencoded({ extended: true })); //parse our requests
app.use(express.static("public")); // stores static files

// Connection URL
mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

//
const articleSchema = {
    title: String,
    content: String
};
//article model
const Article = mongoose.model("Article", articleSchema);



//
app.listen(3000, function () {
    console.log("Connected to port 3000");

});