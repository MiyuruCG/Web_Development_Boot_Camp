var btn = document.querySelectorAll("button");

// btn[0].addEventListener("click", handleClick);
// btn[1].addEventListener("click", handleClick);
// btn[2].addEventListener("click", handleClick);
// btn[3].addEventListener("click", handleClick);
// btn[4].addEventListener("click", handleClick);
// btn[5].addEventListener("click", handleClick);
// btn[6].addEventListener("click", handleClick);

//loops are easier 
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    btn[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

        switch (buttonInnerHtml) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kickBase = new Audio("sounds/kick-bass.mp3");
                kickBase.play();
                break;

            default:
                console.log(buttonInnerHtml);
                break;
        }


    });
}


//btn[i].addEventListener("click", handleClick);
// function handleClick() {
//     //alert("i got clicked");
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }

// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();