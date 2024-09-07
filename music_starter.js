let wide = 960
let high = 540
let start = 0

function setup() {
  createCanvas(wide, high);
  angleMode(DEGREES);

  //experimenting noiseDetail 
  //noiseDetail(lod, falloff)
  noiseDetail(2,1)
  
}
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw(vocal) {
  background(30);
  noStroke();

  translate(wide/2, high/2);

  var space=10 //the space between rect

  for (var i=0; i<360; i += space) {

    var xoff = map (cos(i), -1, 1, 0, 3)
    var yoff = map (sin(i), -1, 1, 0, 3)

    var n = noise (xoff + start, yoff + start)

    var h = map (n, 0, 1, -150, 150)
    rotate(space)
    rect(200, 0, h, 10)

  }

  start += 0.1
}