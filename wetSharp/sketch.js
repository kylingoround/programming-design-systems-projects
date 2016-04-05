var r = new Rune({
  container: "#canvas",
  width: 450,
  height: 600,
  debug: true
});

//black
r.rect(0,0, r.width, r.height)
  .fill(20)

  //waterfall
r.polygon(r.width/2, 100)
    .lineTo(-1, 100)
    .lineTo(1, 100)
    .lineTo(0.5, 410)
    .lineTo(-0.5, 410)
    .stroke(false)
    .fill(100)

    // var radius = 50;
    // var numRects = 100;
    // var angle = 360 / numRects;
    // var group = r.group(r.width / 2, r.height/3*2+100);
    //
    //
    // for(var i = 0; i < numRects; i++)
    // {
    //   var x = Math.cos(Rune.radians(i * angle)) * radius/2*1.5;
    //   var y = Math.sin(Rune.radians(i * angle)) * radius/2;
    //   // r.rect(x, y, 50, 10, group)
    //     // .rotate(i * angle, 0, 0, true);
    //     r.circle(x,y,Rune.random(10),group)
    //     .rotate(i*angle,0,0,true)
    //     .fill(255)
    //     .stroke(false);
    // }

//iceberg
r.polygon(r.width/2, 100)
  .lineTo(0,-50)
  .lineTo(50, 100)
  // .lineTo(Rune.random(50, -50), Rune.random(100, 140))
  // .lineTo(Rune.random(50, -50), Rune.random(100, 140))
  .lineTo(40, 105)
  .lineTo(20, 107)
  .lineTo(-10, 120)
  .lineTo(-40, 110 )

  .lineTo(-50, 100)
  .stroke(false)
  .fill(255)

var ratio=1
var shade=250
var ratio2=0

for(i=0;i<10;i++){
  r.ellipse(r.width/2, 500-ratio2*1, 80*ratio, 50*ratio)
    .stroke(false)
    // .fill(255-ratio*shade)
    .fill(ratio*shade)

  ratio-=0.09
  ratio2++
}

// r.ellipse(r.width/2, 500, 80*ratio, 50*ratio)
//   .stroke(false)
//   .fill(255)





///


r.draw();
