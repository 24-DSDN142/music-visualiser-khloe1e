
let start = 0
let angle = 0
let p = 300

//var r = map(sin(frameCount), -1, 1, 50, 255)
//var g = map(cos(frameCount/2), -1, 1, 50, 255)
//var b = map(sin(frameCount/4), -1, 1, 50, 255)
 
 


  


function draw_one_frame(words, vocal, drum, bass, other,counter) {
  angleMode(RADIANS);
  rectMode(CENTER);
  noiseDetail(0.1);

  let vocalNoise = map (vocal, 20,100, 0,1,true)
  let Bass = map (bass, 0,100, 0, 200, true)

  let drumColour = map (drum,0,100,0,255,true)
  
  background(0);
  noFill();
  
  let secondsCounter = floor(counter / 60);
  //stroke(255); //incase you don't want color



 //layer 1
//  angleMode(RADIANS)
push();
 translate(canvasWidth/2, canvasHeight/2);
  strokeWeight(16);
  stroke(drumColour);
  //b = bass //originally using r but change to p because r is already used above
  for(let i =0; i < 30; i++) {
    
    
    p = Bass

    let angle = map(i, 0, 30, 0, PI*2)
  let x = p * cos(angle);
  let y = p * sin(angle);
  point(x, y);
  }
  angle += 0.05; //random(-0.1, 0.1);
  p -= random(-2, 2);
pop();
 //layer2
 //translate(canvasWidth/2, canvasHeight/2);
//  angleMode(DEGREES);
push();
translate(canvasWidth/2, canvasHeight/2);
strokeWeight(16);
stroke(255);
 var space = 1 //the space between rect

 for (var i=0; i<360; i += space) {

   var xoff = map (cos(i), -1, 1, 0, 3)
   var yoff = map (sin(i), -1, 1, 0, 3)

   var n = noise (xoff + start, yoff + start)

   var h = map (n, 0, 1, -150, 150)
   rotate(space)
   rect(200, 0, h, 1)

 }

 start += 0.01
pop();
push();

fill (0,100);
rect (50,canvasHeight-350,250,325)
fill (255)
textSize (20);
translate(-50,-150)
text ('counter: ' + counter, 100, canvasHeight-300)
text ('seconds: ' + secondsCounter, 100, canvasHeight-250)
text ('vocal: ' + round(vocal), 100, canvasHeight-200);
text ('bass: ' + round(bass), 100, canvasHeight-150);
text ('drum: ' + round(drum), 100, canvasHeight-100);
text ('other: ' + round(other), 100, canvasHeight-50);


pop();
}
 
 //stroke(255); //incase you don't want color

  // //layer1
  // translate(canvasWidth/2, canvasHeight/2);
  //   for (var i = 0; i < 200; i++) {
  //   push()

  //   rotate (sin(frameCount + i*2) * 360)

  //   var r = map(sin(frameCount), -1, 1, 50, 255)
  //   var g = map(cos(frameCount/2), -1, 1, 50, 255)
  //   var b = map(sin(frameCount/4), -1, 1, 50, 255)

  //   stroke(r, g, b)

  //   //rect(0, 0, 200 - i, 200 - i, 50 -i)// for every loop, the height and width should be decreased so use the i to control
  //    //rect(0, 0, 200, 200, 50) last value is softened