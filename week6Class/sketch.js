var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: true
});

// new Rune.Vector(x, y);

var n = r.polygon(300, 400)     //polygon is made fo vectors
  .lineTo(0,0)
  .lineTo(0, -100)
  .lineTo(75, 0)
  .lineTo(75, -100)
  .scale(3)

// for(i=1; i<n.vars.vectors.length; i++) {
//   var curVector = n.vars.vectors[i];
//   var prevVector = n.vars.vectors[i-1];
//   var direction = curVector.sub(prevVector);
//
//   for(var j=0; j<20; j++){
//     var newDirection = direction.multiply(Rune.random(1));
//     var newPos = prevVector.add(newDirection);
//     r.circle(300+newPos.x, 400+newPos.y, 5)
//   }
// }

for(var i=0; i<100; i++) {
  var halfway = n.vectorAt(Rune.random(0, 0.72));
  r.circle(300+halfway.x, 400 + halfway.y, 5)
}

console.log(r.polygon);


/////////////////////example 2
// var myPath = r.path(300, 300)
//   .moveTo(0, 0)
//   .lineTo(200, 0)
//   .curveTo(300, 0, 300, 200, 200, 200)
//   .closePath();
//
// var myPolygon = myPath.toPolygons({ spacing: 30})    //create polygon along outline every 10px
//
// myPolygon[0].move(200, 200, true);
//
// // r.stage.add(myPolygon[0]);





r.draw();
