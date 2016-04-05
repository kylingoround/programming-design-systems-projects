var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
});

//circle r=5, d=10
//rect w=30, h=10

var radius = 5;
var offset = radius * 2;
var length = 0;

// r.circle(10, 15, 5, 5)
//   .stroke(false);
//
// r.rect(25, 10, 30, 10)
//   .stroke(false);
//
// // r.circle(10, 35, 5, 5)
//
// drawCircle(10, 35);
// drawRect(30, 35); //y = yC-5
//
// drawCircle(10, 55);
// drawCircle(30, 55);
// drawRect(30 ,55);

// drawMorse(30, 30, 2, 1, 2, 1);
// drawMorse(30, 50, 2, 2, 2);
// drawMorse(30, 70, 2, 2);
// drawMorse(30, 90, 2, 1, 1, 1);
// drawMorse(30, 110, 1, 2);
// drawMorse(30, 130, 2);

//m
drawMorse(30, 30, 2, 1, 1, 1, 1, 2);
drawMorse(30, 50, 2, 2, 2, 2);
drawMorse(30, 70, 2, 1, 2, 1, 2);
drawMorse(30, 90, 2, 1, 2, 1, 2);
drawMorse(30, 110, 2, 1, 2, 1, 2);
drawMorse(30, 130, 2, 1, 2, 1, 2);

//o
drawMorse(30, 200, 2, 2, 2, 2);
drawMorse(30, 220, 2, 1, 1, 1, 1, 2);
drawMorse(30, 240, 2, 1, 1, 1, 1, 2);
drawMorse(30, 260, 2, 1, 1, 1, 1, 2);
drawMorse(30, 280, 2, 1, 1, 1, 1, 2);
drawMorse(30, 300, 2, 2, 2, 2);

//s
drawMorse(30, 340, 2, 2, 2, 2);
drawMorse(30, 360, 2, 1, 1, 1, 1, 2);
drawMorse(30, 380, 2, 2, 1, 1, 1, 1);
drawMorse(30, 400, 1, 1, 1, 1, 2, 2);
drawMorse(30, 420, 2, 1, 1, 1, 1, 2);
drawMorse(30, 440, 2, 2, 2, 2);


function drawMorse(x, y, a,b,c,d,e,f,g,h,i){

  if(a==1){
  drawCircle(x, y);
  x+=offset*2;
  } else if (a==2) {
  drawRect(x, y);
  x+=offset*4;
  }

  if(b==1){
  drawCircle(x, y);
  x+=offset*2;
  } else if (b==2) {
  drawRect(x, y);
  x+=offset*4;
  }

  if(c==1){
  drawCircle(x, y);
  x+=offset*2;
  } else if (c==2) {
  drawRect(x, y);
  x+=offset*4;
  }

  if(d==1){
  drawCircle(x, y);
  x+=offset*2;
  } else if (d==2) {
  drawRect(x, y);
  x+=offset*4;
  }

  if(e==1){
  drawCircle(x, y);
  x+=offset*2;
  } else if (e==2) {
  drawRect(x, y);
  x+=offset*4;
  }

  if(f==1){
  drawCircle(x, y);
  x+=offset*2;
  } else if (f==2) {
  drawRect(x, y);
  x+=offset*4;
  }

  if(g==1){
  drawCircle(x, y);
  x+=offset*2;
  } else if (g==2) {
  drawRect(x, y);
  x+=offset*4;
  }

  if(h==1){
  drawCircle(x, y);
  x+=offset*2;
  } else if (h==2) {
  drawRect(x, y);
  x+=offset*4;
  }

  if(i==1){
  drawCircle(x, y);
  x+=offset*2;
  } else if (i==2) {
  drawRect(x, y);
  x+=offset*4;
  }


}

function drawCircle(x, y) {
  r.circle(x, y, 5, 5)
  .stroke(false);
}

function drawRect(x, y) {
  r.rect(x-radius, y-radius, 30, 10)
    .stroke(false);
}



r.draw();
