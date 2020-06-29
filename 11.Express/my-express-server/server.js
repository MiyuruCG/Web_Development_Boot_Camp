var express = require('express');

const app = express();

//sending an response to the browser
app.get("/", function (req, res) {
    res.send("<h1>Hello World</h1>");
});

//listening in the port 3000
app.listen(3000, function () {
    console.log("Server started in port 3000");
});
