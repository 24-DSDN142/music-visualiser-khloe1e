let wide = 540
let high = 960
let start = 0
let angle = 0
let p = 300

function setup() {
  createCanvas(wide, high);
  angleMode(DEGREES);
  rectMode(CENTER);
  background(0);

  //experimenting noiseDetail 
  //noiseDetail(lod, falloff)
  noiseDetail(2,1)
  
}

function draw_one_frame(words, vocal, drum, bass, other,counter) {
  background(0);
  noFill();
  let secondsCounter = floor(counter / 60);
  //stroke(255); //incase you don't want color

  //layer1
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
 //layer 2
 angleMode(RADIANS)
 translate(wide/2, high/2);
  strokeWeight(16);
  stroke(255);
  //b = bass //originally using r but change to p because r is already used above
  for(let i =0; i < 20; i++) {
    p = bass
    let angle = map(i, 0, 20, 0, PI*2)
  let x = p * cos(angle);
  let y = p * sin(angle);
  point(x, y);
  }
  angle += 0.05; //random(-0.1, 0.1);
  p -= random(-2, 2);

}
 