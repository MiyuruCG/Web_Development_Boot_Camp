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

//Chained routing 
app.route("/articles")

    .get(function (req, res) {
        //query DB
        Article.find(function (err, allArticles) {
            if (err) {
                console.log(err);

            } else {
                // console.log(allArticles);
                res.send(allArticles);
            }
        });
    })

    .post(function (req, res) {

        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Save successful");

            }
        });
    })

    .delete(function (req, res) {
        Article.deleteMany(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send("Deleted All articles");
            }
        });
    });

// //GET all (Read from DB)
// app.get("/articles", function (req, res) {
//     //query DB
//     Article.find(function (err, allArticles) {
//         if (err) {
//             console.log(err);

//         } else {
//             // console.log(allArticles);
//             res.send(allArticles);
//         }
//     });
// });

// //POST 
// app.post("/articles", function (req, res) {

//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });

//     newArticle.save(function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Save successful");

//         }
//     });
// });

// //DELETE
// app.delete("/articles", function (req, res) {
//     Article.deleteMany(function (err) {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send("Deleted All articles");
//         }
//     });
// });


//
app.listen(3000, function () {
    console.log("Connected to port 3000");

});