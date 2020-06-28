
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var count = 0;
var started = false;
var level = 0;

function nextSequence() {

    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

    console.log(randomChosenColor);
}

// nextSequence();

// $("#" + randomChosenColor).click(function () {
//     $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     //alert("hi");

//     var sound = new Audio("sounds/blue.mp3");
//     sound.play();
// });

$(".btn").click(function () {
    var userChosenButton = this.id;

    userClickedPattern.push(userChosenButton);
    console.log(userClickedPattern);

    playSound(userChosenButton);
    animatePress(userChosenButton);

    checkAnswer(userClickedPattern.length - 1);

    //var a = checkPattern(userClickedPattern);

    // if (a) {
    //     if (level >= 1 && userClickedPattern.length === gamePattern.length) {
    //         setTimeout(function () {
    //             nextSequence();
    //         }, 1000);
    //     }
    // }
    // else {
    //     //alert("error");
    //     var so = new Audio("sounds/wrong.mp3");
    //     $("body").addClass("game-over");
    //     setTimeout(function () {
    //         $("body").removeClass("game-over");

    //     }, 200);
    //     so.play();
    // }

});

$(document).keypress(function () {
    if (count === 0) {
        $("h1").text("Level " + level);
        count++;
        nextSequence();
    }

});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");

    }, 100);
}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {

        console.log("wrong");
        var so = new Audio("sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");

        }, 200);
        so.play();
        $("h1").text("Game Over, Press Any Key to Restart ");

        startOver();
    }

}

function startOver() {
    level = 0;
    gamePattern = [];
    count = 0;
    started = false;
}

// function checkPattern(pattern) {

//     for (var i = 0; i <= gamePattern.length; i++) {
//         if (pattern[i] !== gamePattern[i]) {
//             return false;
//         }
//         return true;
//     }
// }