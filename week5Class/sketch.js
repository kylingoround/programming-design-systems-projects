var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

/////use function
// function drawRectangle(x, y) {
// var drawRectangle = function (x,y) {      // same as above
//   r.rect(x,y,100,100);  //put x and y in the code
// }

// drawRectangle(100, 200);
// drawRectangle(0,0)

// function callFunction(func) {
//   func();
// }
//
// var logName = function() {
//   console.log("Name")
// }
//
// callFunction(logName);



//////call function example
// callFunction(function() {
//   console.log("call name")
// });
//
// myImage.load(function() {
//     //image was loaded
//
// });

// var myFont = new Rune.Font("data/helvetica.ttf")  //you need to load the font file
// myFont.load(function() {
//   console.log("loaded")     //make sure the font is loaded
//
//   var rune = myFont.toPath("Rune",200, 200, 120))
//     .fill(255, 0, 0)
//     .stroke(false);
//
//   r.stage.add(rune);    //add it to the main stage
//
//
//   r.draw();
// });

// var letters = [
//   [100, 100, 10, 100],
//   [200, 100, 100, 100, false, false, false, false],
//   [200,100,100,100,200,30,45]
// ]  // array of letters
//
// for(var i=0; i<letters.length; i++) {
//   r.ellipse(letters[i][0], letters[i][1])
//   if(letters[i][5] != false) {
//     r.ellipse(letters[i][4], letters[i][5], letters[i][6], letters[i][7])
//   }
// }

//array of numbers goes into a structure that builds the letterss
//can you do it in a for loop


r.draw();
