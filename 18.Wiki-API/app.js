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

// --------------------------- Requests targeting specific article -----------------------------------

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
                res.send(err);
            } else {
                res.send("Save successful");

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

// --------------------------- Requests targeting specific article -----------------------------------

app.route("/articles/:articleTitle")

    .get(function (req, res) {
        Article.findOne({ title: req.params.articleTitle }, function (err, foundArticle) {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("No articles were found in that name");
            }
        });
    })

    .put(function (req, res) { //updates the specific resource and override the whole doc 
        Article.update(
            { title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content },
            { overwrite: true }, //otherwise mongoose will prevent overriding
            function (err) {
                if (!err) {
                    res.send("Successfully Updated");
                } else {
                    res.send(err);

                }
            }
        );
    })

    .patch(function (req, res) {  //updates the specific resources specific part without overriding the whole doc 

        Article.update(
            { title: req.params.articleTitle },
            { $set: req.body },
            function (err) {
                if (!err) {
                    res.send("Successfully Updated Article");
                } else {
                    res.send(err);
                }
            }
        );
    })

    .delete(function (req, res) {
        Article.deleteOne(
            { title: req.params.articleTitle },
            function (err) {
                if (!err) {
                    res.send("Deleted Successfully");
                } else {
                    res.send(err);
                }
            }
        );
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