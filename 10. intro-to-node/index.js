//jshint esversion:6

//internal node JS
// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt");


//external Node js

var superheros = require('superheroes');
var superVillans = require('supervillains');

var mySuperHeroName = superheros.random();
var myName = superVillans.random();

console.log(mySuperHeroName);
console.log(myName);






