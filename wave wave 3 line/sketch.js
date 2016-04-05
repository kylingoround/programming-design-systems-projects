var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1500,
  debug: true
});

//left rect
r.rect(0, 0, r.width, r.height).fill(20);


var noise = new Rune.Noise();
var noiseStep = 0;

var xStep = 10;

var altitude = 100;
var n = 0.92;
// var n = 0.5
var margin = 200;

//top bg rect
r.rect(margin, 0, r.width-margin*2, r.height).fill(20).stroke(false);

//stars
// for(i=0;i<500;i++) {
//   r.circle(Rune.random(r.width), Rune.random(r.height), 1).fill(255);
// }
//stars end


for(var i = 0; i < 100; i++) {
  noise.noiseSeed(Rune.random(100));

  // (octaves, fall off)
  // fall off: 0-1 lower the smootheir

  noise.noiseDetail(8, 0.1);

  var noisePath = r.path(0, 100 + (i * 30))
    // .fill(i*7+20)
    .fill(20)
    .strokeWidth(1.5)
    .stroke(255);

  var noiseStep = 0;

  for(var x = margin; x <= r.width-margin; x += xStep) {

    var y = noise.get(noiseStep) * altitude;

    if(x == margin) {
      noisePath.moveTo(x, y);
    } else {
       noisePath.lineTo(x, y);
    }

    noiseStep += 0.7;
  }
  noisePath.lineTo(r.width-margin, r.height).lineTo(margin, r.height);

}

r.rect(r.width-margin-2, 0, r.width-margin-2, r.height).fill(20).stroke(false);

r.draw();
