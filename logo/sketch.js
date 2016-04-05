var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var rWidth = 50;
var rHeight = 230;
var gap = 20;
var tLength = 180;
var tHeight = 50;
var radius = 80;

var filling = 0;  //false

var pPosX = rWidth + gap * 2 + tLength;

r.rect(100, 100, rWidth, rHeight)
  .fill(filling);

r.rect(100 + rWidth + gap, 100, tLength, tHeight)
    .fill(filling);

r.rect(100 + rWidth * 0.5 + tLength/2 + gap, 100, rWidth, rHeight)
  .fill(filling);


r.rect(100 + pPosX, 100, rWidth, rHeight)
  .fill(filling);

// r.circle(100 + pPosX + rWidth, 100 + radius, radius)
//   .fill(false);

var pathX = 100 + pPosX + rWidth + radius;

var gap2 = 0;

var curve = r.path(100 + pPosX + rWidth + gap2, 100 + radius);

for(var i = 0; i <= 180; i += 5) {
  var x = Math.cos(Rune.radians(i - 90)) * radius;
  var y = Math.sin(Rune.radians(i - 90)) * radius;
  curve.lineTo(x, y);
}


curve.closePath().fill(filling);

  //.curveTo(radius, 0, radius, radius, radius)
  // .curveTo(radius, radius, 0, radius * 2)
  // .curveTo(pathX, 100, pathX, 100 + radius * 2, radius, radius)
  // .curveTo(0, radius * 2)
  //.closePath()
  //.fill(false);



r.draw();
