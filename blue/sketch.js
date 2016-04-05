var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: true
});

// r.circle(r.width/2, r.height/2, 200, 200).fill(false);
r.rect(0, 0, r.width, r.height).fill(37, 26, 30);

var noise = new Rune.Noise();
var noiseStep = 0;



var num = 1000;
var diameter = 200;
var spacing = diameter/num * 2;
var degree = 180/num;

var ranNum1 = Rune.random(100, 200);
var ranNum2 = Rune.random(100, 200);
var ranNum3 = Rune.random(100, 360);

// var radius = 10;

// for (i=0; i<=num; i++) {
for(i=num;i>=0; i--) {
  // var cos = Math.abs((i * spacing - diameter)) / diameter ;
  // var tan = Math.tan(Rune.radians(i*degree));
  // var abTan = Math.abs(tan);
  // var radius = abTan * cos * diameter;
  // var radius = Math.abs(Math.tan(Rune.radians(i*degree))) * Math.abs((i * spacing - diameter/2)) / diameter / 2 * diameter;

  var x = Math.sqrt(Math.pow(diameter,2) - Math.pow(i * spacing - diameter, 2));

  var color = noise.get(noiseStep);

  r.ellipse(r.width/2, i*spacing+100, x*2, 50).stroke(false).fill(100, 150, color*ranNum3, 80);
  // console.log("degree: " + i*degree);
  // console.log(Math.sin(Rune.radians(i*degree)));
  // console.log(abTan);
  // console.log(cos);
  // console.log(radius);
  noiseStep+=0.01;
}

// r.circle(r.width/2, r.height/2, 200, 200).fill(false);

r.draw();
