function preload() {
  song = loadSound("song.mp3")
}


function setup() {
  createCanvas(540, 960, WEBGL);
  angleMode(DEGREES);
  background(0);
  strokeWeight(4);
  sound.play();
  //create an amplitude object
  amp = new p5.Amplitude();
  amp.setInput(sound);

}
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(30);
  //get the sound level
  var vol = amp.getLevel();

  ellipse(540/2, 960/2, vol*100, vol*100);
  ellipse(540/2 + 200, 960/2, vol*100, vol*100);
  ellipse(540/2 - 200, 960/2, vol*100, vol*100);


}
  