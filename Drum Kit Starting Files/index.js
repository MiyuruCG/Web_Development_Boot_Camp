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
    btn[i].addEventListener("click", handleClick);

    //annonymus function
    // btn[i].addEventListener("click", function () {
    //     alert("i got clicked");
    // });

}


function handleClick() {
    alert("i got clicked");
}
