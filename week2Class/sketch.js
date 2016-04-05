var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

// var myRectangle = r.rect(10, 10, 200, 200).rotate(45).fill(255,0,0);

// r.rect(10, 10, 200, 200)
//   .rotate(10)
//   .fill(false)
//   .stroke(4);

// for(var i=0; i < 2; i ++) {
//   r.circle(200 + i * 300, 300, 100)
//     .fill(255 - i * 255);
// }

var myGroup = r.group(100, 150);
var mySecondGroup = r.group(50, 50, myGroup)

r.ellipse(0, 0, 150,150, mySecondGroup); //this ellipse goes into the group

// myRectangle.rotate(45);

r.draw();
