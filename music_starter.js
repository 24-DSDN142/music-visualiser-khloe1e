let wide = 540
let high = 960
let start = 0

function setup() {
  createCanvas(wide, high);
  angleMode(DEGREES);

  //experimenting noiseDetail 
  //noiseDetail(lod, falloff)
  noiseDetail(2,1)
  
}

//Layer 1 - 






//Layer 3 - Circular perlin noise 
function draw(bass) {
  background(0);
  noStroke();

  translate(wide/2, high/2);

  var space = 1 //the space between rect

  for (var i=0; i<360; i += space) {

    var xoff = map (cos(i), -1, 1, 0, 3)
    var yoff = map (sin(i), -1, 1, 0, 3)

    var n = noise (xoff + start, yoff + start)

    var h = map (n, 0, 1, -150, 150)
    rotate(space)
    rect(200, 0, h, 1)

  }

  start += 0.1
}