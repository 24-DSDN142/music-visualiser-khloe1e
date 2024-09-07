let wide = 960
let high = 540
function setup() {
  createCanvas(wide, high);
  angleMode(DEGREES);
  
}
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw(words, vocal, drum, bass, other, counter) {
  background(30);
  noStroke();

  translate(wide/2, high/2);

  var space=10

  for (var i=0; i<360; i += space) {
    rotate(space)
    rect(200, 0, 10)

  }
}