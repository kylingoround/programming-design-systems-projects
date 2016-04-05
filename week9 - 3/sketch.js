var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: true
});

//draw points that are not equally spaced along a curve with perlin noise
//save it in an array
//create array of color
//add directions of shapes - array lineDirections

var noise = new Rune.Noise();
var noiseStep = 0;

var linePoints = [];
var lineDirections = [];
var x = 0;
var y = 0;



while(x < 1000) {
  x += Rune.random(60, 150);
  y = 450 + noise.get(noiseStep) * 100;
  linePoints.push(new Rune.Vector(x, y));

  // r.circle(x, y, 5);

  noiseStep += 0.05;

  //create directions
  var deg = Rune.random(-100, -80);
  lineDirections.push(new Rune.Vector(Math.cos(deg), Math.sin(deg)));
}

//draw points

for (var i=0; i< linePoints.length - 1; i++) {
  var ranHeight = Rune.random(150, 350);
  var bottomLeft = linePoints[i];
  var bottomRight = linePoints[i + 1];
  var topLeft = bottomLeft.sub(new Rune.Vector(0, ranHeight));
  var topRight = bottomRight.sub(new Rune.Vector(0, ranHeight));

  r.triangle(bottomLeft.x, bottomLeft.y, topLeft.x, topLeft.y, topRight.x, topRight.y).fill(100);
  r.triangle(bottomRight.x, bottomRight.y, topLeft.x, topLeft.y, topRight.x, topRight.y).fill(200);

  r.line(bottomLeft.x, bottomLeft.y, bottomRight.x, bottomRight.y);
}

r.draw();
