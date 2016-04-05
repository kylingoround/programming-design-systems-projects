var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: true
});
//perlin noise
var noise = new Rune.Noise();
// noise.noiseSeed(10);//doesnt work right now
//
var noiseStep = 0;
//
// for (var x=0; x < r.width; x += 5) {
//   // var ran = Rune.random(0, 50);
//   var y = 200 + noise.get(noiseStep)*200;  //noise is between 0 and 1
//   r.circle(x, y, 2);
//   noiseStep += 0.01
// }
//

var circle = r.polygon(r.width/2, r.height/2).fill(false).strokeWidth(2).stroke(50);
var numPoints = 120;
var pointDegree = 360/numPoints;

for(var i=0; i<numPoints; i++){
  var radius = 200 + (noise.get(noiseStep) * 40);
  var x = Math.cos(Rune.radians(i*pointDegree)) * radius;
  var y = Math.sin(Rune.radians(i*pointDegree)) * radius;
  circle.lineTo(x, y);
  noiseStep += 0.05;
}


var iceberg = r.polygon(r.width/2, 100);

for (var degree = 0; degree <= 180; degree += 3) {
  var x = Math.cos(Rune.radians(degree)) * 200;
  var y = Math.sin(Rune.radians(degree)) * 200;
  iceberg.lineTo(x, y);

if(degree > 5 && degree < 5){
}

  noiseStep += 0.04;
}

r.draw();
