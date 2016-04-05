var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 450,
  debug: true
});

//make walls
var rectWidth = 20
var num =  Math.ceil(r.width/rectWidth);
var offset = (rectWidth * num - r.width)/2

//set hue
// var wallColor = Rune.color('hsv',)

r.rect(0,0,r.width,r.height)
  .stroke(false)
  // .fill(Rune.random(255), Rune.random(255), Rune.random(255))  //freedom
  .fill("hsv", Rune.random(360),  Rune.random(100), 100)

  var lineH = Rune.random(360)
  var lineS = 100
  var lineV = 100
  for(i=0;i<130;i++){
    r.line(i*10, 0, 0, i*10)
    .stroke('hsv', lineH, lineS, lineV)
    .strokeWidth(0.5)

  console.log(lineH, lineS, lineV)
  }

console.log(offset);

for(i=0;i<100;i++) {
  r.rect(Rune.random(r.width), Rune.random(r.height), 10, 10)
    .fill('hsv',Rune.random(360), Rune.random(80), 100)
    .stroke(false)
}

for(i=0;i<num;i++) {
  var x = i*rectWidth-offset;
  var randomH = Rune.random(360)
  var wallH = Math.round(randomH, 0, 360, 150, 200)

  var wallS = Rune.random(80)
  var wallV = Rune.random(100, 100)
  // r.rect(x, 300, rectWidth, 100) //base wallColor
  // r.rect(x, wallH, rectWidth, 100+wallH) //random position
  r.rect(x, 350-wallH/5, rectWidth, 350-wallH/5)
  .fill("hsv", randomH, wallS, wallV)
  .stroke(false);
  // console.log(wallH)

  // r.rect(x, 350, rectWidth, 50)
  // .fill("hsv", randomH, wallS, wallV)
  // .stroke(false);

}




r.draw();
