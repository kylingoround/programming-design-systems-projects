var r = new Rune({
  container: "#canvas",
  width: 420,
  height: 600,
  debug: true
});

// r.rect(100, 100, 200, 200)
//   .fill(255, 0, 0)
//   .stroke(0)
//
// r.triangle(400, 50, 400, 400, 650, 50)
//   .fill(0, 255, 0)
//   .stroke(0)
//
// r.ellipse(200, 500, 200, 300)
//   .fill(0, 0, 255)
//   .stroke(false)

var cos = r.width/r.height
var sin = r.height/r.width
var ratio = 0.5
var centerX = r.width*cos*ratio
var centerY = r.height*cos*ratio
console.log(centerX)
console.log(centerY)

r.ellipse(centerX, centerY, 130, 130)
  .fill(0)
r.ellipse(centerX, centerY, 140, 140)
  .fill(false)
  .stroke(0)
  .strokeWidth(1)

r.ellipse(centerX, centerY, 350, 350)
  .fill(false)
  .stroke(0)
  .strokeWidth(2)


r.ellipse(centerX+50, centerY+20, 650, 650)
  .fill(false)
  .stroke(0)
  .strokeWidth(2)

r.ellipse(60, 60, 40, 40)
  .fill(0)

r.ellipse(350, 515, 50, 50)
  .fill(255)
  .strokeWidth(1.5)

var mattDamon= r.rect(333,492,1,15).fill(0).rotate(15, 350, 500)
// var mattDamon= r.rect(335,505,4,4).fill(0).rotate(15, 350, 500)





r.draw();
