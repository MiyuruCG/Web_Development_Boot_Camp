const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const assert = require("assert");

const app = express();

app.set("view engine", ejs);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connection URL
const url = 'mongodb://localhost:27017/wikiDB';
mongoose.connect(url, { userNewUrlParser: true });

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);


app.listen(3000, function () {
    console.log("Connected to port 3000");

});