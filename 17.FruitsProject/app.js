
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

const mongoose = require("mongoose");

//Creating and connecting to db using mongoose
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

//create new schema (Blueprints of the )
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

//creates a new collection that follows the schema we defined above
const Fruit = mongoose.model("Fruit", fruitSchema);

//create new fruit document
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "good"
});

// //saves the fruit document inside the fruits Collection in the fruitDB
// //fruit.save();


//mongoose.connect("mongodb://localhost:27017/personDB", { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Jhon",
    age: 37
});

//person.save();

const mango = new Fruit({
    name: "mango",
    rating: 7,
    review: "good"
});

const orange = new Fruit({
    name: "orange",
    rating: 7,
    review: "good"
});

// Fruit.insertMany([mango, orange], function (err) {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log("Saved success");

//     }
// });

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);

    } else {
        //close db connection
        mongoose.connection.close();

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }

});








//------------------------      Creating and connecting to db
// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'fruitsDB';

// // Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true });

// // Use connect method to connect to the Server
// client.connect(function (err) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     findDocuments(db, function () {
//         client.close();
//     });
// });

// const insertDocuments = function (db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Insert some documents
//     collection.insertMany([
//         {
//             name: "Mango",
//             rate: 5
//         },
//         {
//             name: "Banana",
//             rate: 5
//         },
//         {
//             name: "Oranges",
//             rate: 5
//         }
//     ], function (err, result) {
//         assert.equal(err, null);
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// }

// const findDocuments = function (db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Find some documents
//     collection.find({}).toArray(function (err, fruits) {
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(fruits)
//         callback(fruits);
//     });
// }
