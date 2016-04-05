var r = new Rune({
  container: "#canvas",
  width: 850,
  height: 1100,
  // debug: true
});

// Create a rectangle to fill the entire screen
// and a smaller rectangle on top
// var grid1 = r.grid({
//   x: 0,
//   y: 0,
//   width: r.width,
//   height: r.height,
//   gutter: 0,
//   columns: 3,
//   rows: 3
// });

// var grid2 = r.grid({
//   x: 100,
//   y: 100,
//   gutter: 25,
//   width: r.width - 200,
//   height: r.height - 200,
//   columns: 5,
//   rows: 5
// });
var margin = 200



var grid2 = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  // gutter: 100,
  columns: 85,
  rows: 110,
});

var orange = r.circle(160, r.height*0.7, 80)
      .stroke(false)
      .fill(255, 150, 0)
      // .stroke(255, 165, 0)
      // .strokeWidth(10)
      // .fill(false)

var grid1 = r.grid({
  x: 0 + margin/2,
  y: 0 + margin/2,
  width: r.width - margin,
  height: r.height - margin,
  // gutter: 100,
  columns: 6,
  rows: 12,
});


// var orange = r.circle(0, -25, 80)


var title = r.text("a clockwork", -120, 0)
    .fontSize(100)
    .fontFamily("Helvetica")
    .stroke(false)
    .fill(255, 100)
    // .fontWeight("bold")



var rect = r.rect(-400, 0, 800, 25)
  .stroke(false)
  .fill(0)



// grid2.add(rect2, 85, 110);
for(var j=1; j<111; j++){
for(var i=1; i< 86; i++){
  var rect2 = r.rect(0, 0, 10, 10)
        .stroke(false)
        .fill(Rune.random(i/86*255));
  grid2.add(rect2, i, j);
}
}

grid1.add(title, 4, 11)
// grid1.add(orange, 6, 11)
grid1.add(rect, 1, 3)
grid1.rotate(90, r.width/2, r.height/2);

r.text("orange", 185, r.height*0.72)
      .fontSize(100)
      .fontSize(100)
      .fontFamily("Helvetica")
      .stroke(false)
      .fill(255, 160, 0)


r.draw();
