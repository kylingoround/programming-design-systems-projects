var r = new Rune({
  container: "#canvas",
  width: 210,
  height: 297,
  debug: true
});

r.rect((210-118)/2, 136-121/2, 118, 118)
  .fill(255)
  .stroke(0)
  .rotate(45, 105, 136)

r.triangle(0, 280, 0, 220, 104, 220)
  .fill(0)
  .stroke(0)

r.ellipse(105, 105, 180, 170)
  .fill(0)
  .stroke(255)

r.draw();
