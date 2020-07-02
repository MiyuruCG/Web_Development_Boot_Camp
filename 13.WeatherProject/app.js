const express = require('express');
const https = require("https");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {

    const query = req.body.cityName;
    const apiKey = "91cda6351af38a63bafb2651f905659f";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units + "#"

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {

            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const img = weatherData.weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/" + img + "@2x.png";
            console.log(temp);
            console.log(description);
            res.write("<p>The Weather is currently " + description + "</p>")
            res.write("<h1>The temperature in " + query + " is : " + temp + " degrees Celcius</h1>");
            res.write("<img src=" + imgUrl + ">");

            res.send();

        })

    });


});


//res.send("server is up and running");





app.listen(3000, function () {
    console.log("Server is running in port 3000");
});