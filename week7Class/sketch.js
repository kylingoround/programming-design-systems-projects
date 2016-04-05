var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: true
});

//module 2 % 2 = 0, 3 % 2 = 1

// for(var i=0; i<50; i++) {
//   console.log(i % 2);
// }

//use module in for loop
// for(i=0; i<50; i++) {
//   if(i%2 == 0) {
//     r.rect(r*20, 0, 20, 20);
//   } else if(i%2 == 1) {
//     r.rect(r*10, 0, 10, 10);
//   }
// }

// var myRect = r.rect(0, 0, 100, 100);    //create a shape object, move it
//
// r.on('draw', function() {        // r.on('eventname')
//     // console.log("here")
//
//     //scene graph keep memories in draw
//     myRect.move(1, 0, true);
//
//
// })

var poly1 = r.polygon(200, 200)
  .lineTo(0, 0)
  .lineTo(200, 0)
  .lineTo(200, 200)

  var poly2 = r.polygon(0, 0)
    .lineTo(0, 0)
    .lineTo(100, 0)
    .lineTo(100, 100)

r.on('draw', function(){
  if(poly2.contains(poly1.vars.x, poly1.vars.y)) {
    poly2.fill(255, 0, 0);
    // console.log("here")
  }
})

r.on('mousemove', function(mouse){
  poly2.move(mouse.x, mouse.y)
  // console.log('here');
})

r.play();   //use play not run


r.draw();
