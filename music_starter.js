function setup() {
  createCanvas(540, 960, WebGL);
  angleMode(DEGREES);
  background(0);
  strokeWeight(4);
}
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(30);

  rotateX(60);

  noFill();
  stroke(255);

  for (var i = 0; i < 10; i++){
    beginShape()
    for (var j = 0; j < 360, j += 10) {
      var rad = i * 8
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount + i * 10) * 50

      vertex(x, y, z)

    }

    endShape(CLOSE)

}
}