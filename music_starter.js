let wide = 540
let high = 960
let start = 0
var fft

function setup() {
  createCanvas(wide, high);
  angleMode(DEGREES);
  rectMode(CENTER);
  background(0);
  fft = new p5.FFT();

  //experimenting noiseDetail 
  //noiseDetail(lod, falloff)
  noiseDetail(2,1)
  
}

//LAYER1 - Simple sine wave - Drum
function draw() {
  background(0);
  noFill();
  //stroke(255); //incase you don't want color
  translate(wide/2, high/2);

  for (var i = 0; i < 200; i++) {
    push()

    rotate (sin(frameCount + i*2) * 360)

    var r = map(sin(frameCount), -1, 1, 50, 255)
    var g = map(cos(frameCount/2), -1, 1, 50, 255)
    var b = map(sin(frameCount/4), -1, 1, 50, 255)

    stroke(r, g, b)

    rect(0, 0, 200 - i * 2, 200 - i * 2, 50 -i)// for every loop, the height and width should be decreased so use the i to control
     //rect(0, 0, 200, 200, 50) last value is softened
  }
}

//LAYER2 - Round waveform - Other electronics
function draw() {

}




//LAYER3 - Circular perlin noise 
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