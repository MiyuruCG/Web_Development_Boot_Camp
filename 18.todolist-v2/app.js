
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://Admin-mcg:miyuru2017@cluster0.pcryi.mongodb.net/todoListDB", { useNewUrlParser: true, useUnifiedTopology: true });

//create schema
const itemsSchema = {
  name: String
};

//create mongoose model
const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your new ToDo List"
});

const item2 = new Item({
  name: "Click + to add new item"
});

const item3 = new Item({
  name: "<-- this to cross off the item"
});

const defaultItems = [item1, item2, item3];

//list db
const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);



app.get("/", function (req, res) {

  Item.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      if (result.length === 0) {
        Item.insertMany(defaultItems, function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Added the default items");
          }
        });
        res.redirect("/");
      } else {
        res.render("list", { listTitle: "Today", newListItems: result });
      }
    }
  });

});

// app.post("/", function (req, res) {

//   const itemName = req.body.newItem;
//   const listName = req.body.list;
//   const newItemDoc = new Item({
//     name: itemName
//   });

//   // newItemDoc.save();
//   // res.redirect("/");

//   if (listName === "Today") {

//     newItemDoc.save;
//     res.redirect("/");
//     console.log("Today item added");

//   } else {

//     List.findOne({ name: listName }, function (err, foundList) {
//       foundList.items.push(newItemDoc);
//       foundList.save();
//       res.redirect("/" + listName);
//     });

//   }

// });

app.post("/", function (req, res) {

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});

app.post("/delete", function (req, res) {
  const checkedItemID = req.body.checkBox;
  const listName = req.body.listName;

  if (listName === "Today") {

    Item.findByIdAndDelete(checkedItemID, function (err) {
      if (err) {
        console.log(err);

      } else {
        //console.log("Item Deleted");
        res.redirect("/")
      }

    });

  } else {

    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemID } } },
      function (err, foundList) {
        if (!err) {
          res.redirect("/" + listName);
        } else {
          console.log(err);

        }
      }
    );

  }


});

// app.get("/work", function (req, res) {
//   res.render("list", { listTitle: "Work List", newListItems: workItems });
// });

//create new list 
app.route("/:customList")

  .get(function (req, res) {
    const customListName = _.capitalize(req.params.customList);

    List.findOne({ name: customListName }, function (err, foundList) {

      if (!err) {
        if (foundList) {//show existing list

          //console.log("There's already a list ");
          res.render("list", { listTitle: foundList.name, newListItems: foundList.items })

        } else {//create a new list 

          console.log("New List");
          const list = new List({
            name: customListName,
            items: defaultItems
          });

          list.save();
          res.redirect("/" + customListName);
        }

      } else {
        console.log("Error occurred :: " + err);
      }

    });

  });

app.get("/about", function (req, res) {
  res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function () {
  console.log("Server started successfully");
});
