var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: true
});

//grid - rune.grid
//either use module w/h or w/h but not both
//a grid is an empty group

var myGrid = r.grid({
  x: 50,
  y: 50,
  width: 700,
  height: 500,
  gutter: 10,
  columns: 4,
  rows: 3
})

// myGrid.rotate(45);

var myRect = r.rect((myGrid.vars.moduleWidth/2)-50, (myGrid.vars.moduleHeight/2)-50, 100, 100)
myGrid.add(myRect, 2, 2)

r.draw();
