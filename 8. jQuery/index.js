// //document.querySelector("h1");
// //same as
// $("h1").html("<em>Hello</em>")


// //document.querySelectorAll("button");//selects all the buttons
// $("button").text("this is a button");//does the same thing

// console.log($("a").attr("href", "http://www.yahoo.com"));

//Event handlers -------------------------------------
$("h1").click(function () {
    $("h1").css("color", "red");

});

$("button").click(function () {
    //$("h1").css("color", "yellow");
    //$("h1").toggle();
    //$("h1").fadeToggle();
    //$("h1").slideToggle();
    // $("h1").animate({
    //     margin: "20%"
    // }); //can only add css with a numeric value
    $("h1").slideUp().slideDown();
});

$("input").keypress(function (event) {
    console.log(event.key);
    $("h1").text(event.key);
});


$("h1").on("mouseover", function () {
    $("h1").css("color", "blue");
});