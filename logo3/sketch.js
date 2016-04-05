var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var rWidth = 50;
var rHeight = 230;
var gap = 20;
var tLength = 130;    //180
var tHeight = 50;

var thicknessRan = Rune.random(0, 1);
var tRan = Rune.random(0.5, 1);

var filling = 0;  //false

var pPosX = rWidth + gap * 2 + tLength*tRan;

//small cap
var ioffset = Rune.random(80);    //50

var t1offset = Rune.random(80);   //50
var t2offset = 0;

var p1offset = Rune.random(80);    //50
var p2offset = Rune.random(80);    //50

var radius = 80 - p2offset/3;




r.rect(100, 100 + ioffset, rWidth*thicknessRan, rHeight - ioffset)
  .fill(filling);

r.rect(100 + rWidth + gap, 100 + t1offset, tLength*tRan, tHeight*thicknessRan)
    .fill(filling);

r.rect(100 + rWidth * 1.5 * thicknessRan + tLength/2 *tRan + gap, 100 + t2offset, rWidth*thicknessRan, rHeight)
  .fill(filling);


r.rect(100 + pPosX, 100 + p1offset, rWidth*thicknessRan, rHeight - p1offset)
  .fill(filling);

// r.circle(100 + pPosX + rWidth, 100 + radius, radius)
//   .fill(false);

var pathX = 100 + pPosX + rWidth + radius;

var gap2 = 0;

var curve = r.path(100 + pPosX + rWidth + gap2, 100 + radius + p2offset);

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
