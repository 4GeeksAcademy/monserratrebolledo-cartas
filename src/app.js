
import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    'J', 'Q', 'K'];

  const suits = ['♦', '♥', '♠', '♣'];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const isRed = randomSuit === '♥' || randomSuit === '♦';
  const colorClass = isRed ? 'text-danger' : 'text-dark';
  document.getElementById('topSuit').innerText = randomSuit;
  document.getElementById('bottomSuit').innerText = randomSuit;
  document.getElementById('mainValue').innerText = randomValue;

  document.getElementById('card').classList.add(colorClass);



}