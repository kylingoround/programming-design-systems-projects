var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 1000,
});

var width = 50;
var degrees = 0;
var spacing = 1.1;

r.rect(0,0,r.width,r.height).fill(0,0,50);

// drawRect(50, 50, 0);
drawLetter(50, 300, 1, 1, 0, 0);  //m
drawLetter(220, 300);    //o
drawS(390, 300);    //s
drawLetter(560, 300, 0, 0, 0, 1); //a
drawI(730, 300);
drawLetter(850, 300, 0, 1, 0, 1);  //k



function texture1(x, y) {
  for(i=x; i>=x && i<x+width; i+=5) {
    for(j=y; j>=y, j<y+width; j+=5) {
      r.rect(i, j, 4, 4)
      .stroke(false);
    }
  }
}

function drawS(x, y){
  drawRect(x, y, 1);
  drawRect(x+width*1.41*spacing/2, y-width*spacing*1.41/2, 1);
  drawRect(x+width*1.41*spacing/2, y+width*spacing*1.41/2, 1);
  drawRect(x, y+width*spacing*1.41, 1);
}

function drawI(x, y){
  drawRect(x, y, 0);
  drawRect(x, y+width*spacing, 0);
  drawRect(x, y-width*spacing*1.41*0.8, 1);
}

function drawLetter(x, y, a, b, c, d) {
  drawRect(x, y, a);
  drawRect(x + width*spacing, y, b);
  drawRect(x, y + width * spacing, c);
  drawRect(x + width*spacing, y + width*spacing, d);
}

function drawRect(x,y,rState) {
  if(rState == 1) {
    degrees = 45;
  } else if (rState == 0 ) {
    degrees = 0;
  }

r.rect(x, y, width, width)
  .stroke(0,110,0)
  .strokeWidth(3)
  .fill(false)
  .rotate(degrees, x+width/2, y+width/2)
  .fill('hsv', Rune.random(360), 80, 90)
}

r.draw();
