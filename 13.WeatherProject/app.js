const express = require('express');
const https = require("https");

const app = express();


app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=91cda6351af38a63bafb2651f905659f&units=metric#"

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
            res.write("<h1>The temperature in london is : " + temp + " degrees Celcius</h1>");
            res.write("<img src=" + imgUrl + ">");

            res.send();

        })

    });

    //res.send("server is up and running");
})







app.listen(3000, function () {
    console.log("Server is running in port 3000");
});