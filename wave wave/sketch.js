var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: true
});

r.rect(0, 0, r.width, r.height).fill(30);

var noise = new Rune.Noise();
var noiseStep = 0;

var xStep = 10;

var altitude = 10;
var n = 0.92;
// var n = 0.5
var margin = 50;

for(var i = 0; i < 10; i++) {
  // (octaves, fall off)
  // fall off: 0-1 lower the smootheir

  // noise.noiseDetail(i + 1);

  var noisePath = r.path(0, 30 + (i * 30))
    .fill(false)
    .strokeWidth(1.5)
    .stroke(150);

  var noiseStep = 0;

  for(var x = margin; x < r.width-margin; x += xStep) {

    if(x <= r.width/2) {
      altitude /= n;
    } else if (x > r.width/2) {
      altitude *= n;
    }

    var y = noise.get(noiseStep) * altitude;

    if(x == margin) {
      noisePath.moveTo(x, y);
    } else {
       noisePath.lineTo(x, y);
    }

    noiseStep += 0.1;
  }
}

r.draw();
