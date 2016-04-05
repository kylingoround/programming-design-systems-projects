var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

//random monotune color scheme
//
// var hue = Rune.random(240, 360)
//
// for(var i=0; i<5; i++) {
//   r.rect(100+i*100, 100, 100, 100)
//   .stroke(false)
//   .fill('hsv', hue, Rune.random(100, 100), Rune.random(50, 100));
// }

// var hue=Rune.random(0,360);
// r.rect(0,0,100,100).fill('hsv',hue,100, 100);
// r.rect(100,0,100,100).fill('hsv', 360-hue,100, 100);
//


// for(var i=0; i<5; i++) {
//   r.rect(100+i*100, 100, 100, 100)
//   .stroke(false)
//   .fill('hsv', i*20, 100, 100);
// }
function getRandomColor() {
  var randomColor = new Rune.Color('hsv', Rune.random(360),Rune.random(100),Rune.random(100))
  return randomColor;  //put color in the field
}

for(var i=0; i<100; i++) {
var myCircle = r.circle(Rune.random(r.width), Rune.random(r.height), 30)
  .fill(getRandomColor())
  .stroke(false);
}

for(var i=0; i<100; i++) {
var myRect = r.rect(Rune.random(r.width), Rune.random(r.height), 10, 10)
  .fill(getRandomColor())
  .stroke(false);
}

// console.log(randomColor);

r.draw();
