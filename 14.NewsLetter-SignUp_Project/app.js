const express = require('express');
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signUp.html");
});


app.post("/", function (req, res) {


    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

    console.log(fName, lName, email);

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data);

    var url = "https://us10.api.mailchimp.com/3.0/lists/8a1da344e8"
    var apiKey = ""; //Generate new key in  Mailchimp
    const options = {
        method: "POST",
        auth: "mcg:" + apiKey
    }

    const request = https.request(url, options, function (response) {

        if (response.statusCode === 200) {
            //res.send("Successfully Subscribed")
            res.sendFile(__dirname + "/success.html");
        } else {
            //res.send("Error singin up");
            res.sendFile(__dirname + "/failure.html")
        }

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});

app.post("/failure", function (req, res) {
    res.redirect("/");
});

//--data '{"name":"Freddie'\''s Favorite Hats","contact":{"company":"Mailchimp","address1":"675 Ponce De Leon Ave NE","address2":"Suite 5000","city":"Atlanta","state":"GA","zip":"30308","country":"US","phone":""},"permission_reminder":"You'\''re receiving this email because you signed up for updates about Freddie'\''s newest hats.","campaign_defaults":{"from_name":"Freddie","from_email":"freddie@freddiehats.com","subject":"","language":"en"},"email_type_option":true}' \


app.listen(process.env.PORT || 3000, function () {
    console.log("Server running in port 3000");

})


