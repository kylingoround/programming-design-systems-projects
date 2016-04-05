var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var numPoints = 3;
var numDegree = 360 / numPoints;

// r.polygon(200, 50)
//   .lineTo(0, 0)
//   .lineTo(200, 200)
//   .lineTo(-200, 200)
//   .fill(255,0,0)
//   .stroke(0,255,0)

  r.path(300, 100)
    .lineTo(0, 0)
    .curveTo(100, -50, 250, 100, 200, 200)
    .lineTo(-200, 200)
    .closePath()
    .fill(255,0,0)
    .stroke(0,255,0)
    .strokeWidth(5)



// var x = Math.cos(Rune.radians(45)) * 200;
// var y = Math.sin(Rune.raidians(45)) * 200;
//
for(var i=0; i<numPoints; i++) {
  var x = Math.cos(Rune.radians(i*numDegree) * 200);
  var y = Math.sin(Rune.radians(i*numDegree) * 200);
  // r.circle(x + 400,y + 400,30)
  // myPolygon =
}

// r.ellipse(x,y,50,50);

r.draw();
