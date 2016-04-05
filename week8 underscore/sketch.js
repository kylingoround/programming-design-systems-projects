var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: true
});

// console.log(_);

var myNumbers = [];
for(var i=0; i<10; i++) {
  myNumbers.push(Math.round(Rune.random(0, 5000)));
}

// console.log(myNumbers);

// var max = 0;
// for(var i=0; myNumbers.length; i++) {
//   if(myNumbers[i] > max) {
//     max = myNumbers[i];
//   }
// }

var max = _.max(myNumbers);   //does the same thing
//not really this one is better

console.log(max);

// _.max return the max value in an array

var names = ["Rune", "Steve", "Ann", "Fred", "Zach"];

var sortedNames = _.sortBy(names);    //sort by alphabite

console.log(sortedNames);

// var newNames = [];
// for(var i=0; i< names.length; i++) {
//   newNames.push(names[i] + " Madsen");
// }

var newNames = _.map(names, function(item) {
  return item + " Madsen"
});
console.log(newNames);

//does the same thing
//clean the data
//take an array, change the array, return the array


//_.filter

var newNames2 = _.filter(names, function(item) {
  return item[0] == "R"
});

console.log(newNames2);
// console.log(_.last(newNames2))  ;

r.draw();
