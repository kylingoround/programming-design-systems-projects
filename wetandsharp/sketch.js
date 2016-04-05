var r = new Rune({
  container: "#canvas",
  width: 450,
  height: 600,
  debug: true
});

//iceberg
//polygons
//generated patterns?
//relatively changed hues


//dripping
//organic
//generated

//outlines
r.polygon(r.width/2, 100)
  .lineTo(0,0)
  .lineTo(50,100)
  .lineTo(-50,100)
  .fill(false)
  .stroke(100)
  .strokeWidth(0.5)

r.polygon(r.width/2,100)
  .lineTo(50, 100)
  .lineTo(-50,100)
  .lineTo(0,150)
  .fill(false)
  .strokeWidth(0.5)


//actual stuffs
r.polygon(r.width/2, 100)
  .lineTo(-5,0)
  .lineTo(20,30)
  .lineTo(-20,50)
  .fill(0)
  .stroke(false)

  //sharp peak
r.polygon(r.width/2, 100)
  .lineTo(-5, 0)
  .lineTo(-10, 100)
  .lineTo(10, 100)
  .stroke(false)



r.polygon(r.width/2, 100)
  .lineTo(-20, 50)
  .lineTo(-40, 80)
  .lineTo(-10, 70)
  .lineTo(-10, 60)
  .fill(0)
  .stroke(false)


r.polygon(r.width/2, 100)
  .lineTo()

//water
r.polygon(r.width/2, 250)
  .lineTo(-5, 0)
  .lineTo(5, 0)
  .lineTo(5, 200)
  .lineTo(-5, 200)
  .fill(false)


//pool
// r.polygon(r.width/2, 400)
//   .lineTo(-50,0)
//   .lineTo(50, 0)
//   .lineTo(50, 50)
//   .lineTo(-50, 50)

r.ellipse(r.width/2, 450, 100,50)
.fill(false)





r.draw();
