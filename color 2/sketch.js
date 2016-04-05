var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 450,
  debug: true
});

//make walls
var rectWidth = 30
var num =  Math.ceil(r.width/rectWidth);
var offset = (rectWidth * num - r.width)/2

//set hue
// var wallColor = Rune.color('hsv',)

r.rect(0,0,r.width,r.height)
  .stroke(false)
  // .fill(Rune.random(255), Rune.random(255), Rune.random(255))  //freedom
  .fill("hsv", Rune.random(360), 10, 10)

console.log(offset);

var lineH = Rune.random(360)
var lineS = 100
var lineV = 40
for(i=0;i<130;i++){
  r.line(i*10, 0, 0, i*10)
  .stroke('hsv', lineH, lineS, lineV)
  .strokeWidth(0.5)

console.log(lineH, lineS, lineV)
}


for(i=0;i<num;i++) {
  var x = i*rectWidth-offset;
  var randomH = 360
  // var wallH = Math.round(randomH, 0, 360, 150, 200)
  wallH = 200


  // r.rect(x, 300, rectWidth, 100) //base wallColor
  // r.rect(x, wallH, rectWidth, 100+wallH) //random position

var wallS = 100
var wallV = Rune.random(60,80)

  r.rect(x, 350-wallH/5, rectWidth, wallH/5)
  .fill("hsv", randomH, wallS, wallV)
  .stroke(false);
  // console.log(wallH)

  r.rect(x, 350, rectWidth, 50)
  .fill("hsv", randomH, wallS, wallV)
  .stroke(false);
}

////////////////////////////////////////////////

for (i=0; i<60; i++) {
  var x2 = i*15-20
  r.rect(x2, 420, 10, 10)
  .fill('hsv', 360, 100, Rune.random(60, 80))
  .stroke(false)
}


r.draw();
