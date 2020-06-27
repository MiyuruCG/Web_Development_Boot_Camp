var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var p1, p2;

if (randomNumber1 === 1) {
  document.querySelector(".img1").src = "images/dice1.png";
  p1 = 1;
} else if (randomNumber1 === 2) {
  document.querySelector(".img1").src = "images/dice2.png";
  p1 = 2;
} else if (randomNumber1 === 3) {
  document.querySelector(".img1").src = "images/dice3.png";
  p1 = 3;
} else if (randomNumber1 === 4) {
  document.querySelector(".img1").src = "images/dice4.png";
  p1 = 4;
} else if (randomNumber1 === 5) {
  document.querySelector(".img1").src = "images/dice5.png";
  p1 = 5;
} else if (randomNumber1 === 6) {
  document.querySelector(".img1").src = "images/dice6.png";
  p1 = 6;
}

if (randomNumber2 === 1) {
  document.querySelector(".img2").src = "images/dice1.png";
  p2 = 1;
} else if (randomNumber2 === 2) {
  document.querySelector(".img2").src = "images/dice2.png";
  p2 = 2;
} else if (randomNumber2 === 3) {
  document.querySelector(".img2").src = "images/dice3.png";
  p2 = 3;
} else if (randomNumber2 === 4) {
  document.querySelector(".img2").src = "images/dice4.png";
  p2 = 4;
} else if (randomNumber2 === 5) {
  document.querySelector(".img2").src = "images/dice5.png";
  p2 = 5;
} else if (randomNumber2 === 6) {
  document.querySelector(".img2").src = "images/dice6.png";
  p2 = 6;
}

if (p1 > p2) {
  document.querySelector("h1").textContent = "Player 1 won";
} else if (p2 > p1) {
  document.querySelector("h1").textContent = "Player 2 won";
} else {
  document.querySelector("h1").textContent = "It is a Draw";
}
