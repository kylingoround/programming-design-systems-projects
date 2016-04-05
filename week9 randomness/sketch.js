var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: true
});

var num = Rune.random(10);
//round: Math.floor() - going down
//Math.ceiling() going up
//Math.round()

//random array

var colors = [
  new Rune.color(255, 0, 0),
  new Rune.color(0, 255, 0),
  new Rune.color(0, 0, 255)
];

var color = colors[Math.floor(Rune.random(0, colors.length))]

var myRectangle = r.rect(0, 0, 200, 200).fill(color);

//put arrays into a big array to return from
// function randomFromArray(arr) {
//   return arr[...]
// }
//
// var color = randomFromArray([
//   array...
// ])

//weighted randomness
function pickRandom(arr) {
  return arr[Math.floor(Rune.random(0, arr.length))].value;
}

var name = pickRandom([
  {value: "Rune", weight: 5};
  {value: "Zach", weight: 1};
  {value: "Fred", weight: 1};
  {value: "Ann", weight: 1};
  {value: "Steve", weight: 1};
])


//get the sum of all weights
// pick a random number between 0 and the sum
// loop through all the options
  //see if weight is greater than the random number
  //subtract the weight from the random number

//seed random - set same random seed
// seedrandom.js
Math.seedrandom('some random texts');


r.draw();
