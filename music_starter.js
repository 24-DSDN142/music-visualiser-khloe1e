let start = 0
let angle = 0
let p = 300
let num = 100
let nim = 100
let gradient = []
let firstRun = true
let img;


function draw_one_frame(words, vocal, drum, bass, other,counter) {
  if (firstRun) {
    img =loadImage('background5.jpg');

    firstRun = false;
  }
// test
  angleMode(RADIANS);
  rectMode(CENTER);
  noiseDetail(0.1);

  let vocalNoise = map (vocal, 20,100, 0.1, 200,true)
  let Bass = map (bass, 0,100, 0, 200, true)
  let bassColour //= map (bass,0, 150, 0, 255,true)

  if (bass <= 65) {
    bassColour = map(bass, 0, 100, 0, 255, true);
    alpha = 128
  } else {
    bassColour = (255);
    alpha = 255;
  }
  let drumNoise = map(drum, 0, 100, 0, 200, true)

  let otherNoise = map(other, 0, 100, 0, 50, true)

  background(0);
  noFill();
  image(img, 0, 0, canvasWidth, canvasHeight);

  let secondsCounter = floor(counter / 60);
  

//layer 1
push();
 translate(canvasWidth/2, canvasHeight/2);
  strokeWeight(16);
  stroke(bassColour, bassColour, bassColour);
  //fill(0, 0, 0,)
  //b = bass //originally using r but change to p because r is already used above
  for(let i =0; i < 200; i++) {
    
    
    p = Bass

    let angle = map(i, 0, 100, 0, PI*2)
  let x = p * cos(angle);
  let y = p * sin(angle);
  point(x, y);
  }
  angle += 0.05; //random(-0.1, 0.1);
  p -= random(-4, 2);
pop();


//layer2 vocal
push();
translate(canvasWidth/2, canvasHeight/2);
strokeWeight(9);
noStroke()
 var space = 1 //the space between rect

 for (var i=0; i<360; i += space) {

   var xoff = map (cos(i), -1, 1, 0, 3)
   var yoff = map (sin(i), -1, 1, 0, 3)

   var n = noise (xoff + start, yoff + start)

   var h = map (n, 0, 1, -vocalNoise, vocalNoise)

   var r = map(sin(i), -1, 1, 100, 200)
   var g = map(h, -vocalNoise, vocalNoise, 0, 150)
   var b = map (n, 0, 1, 150, 255)

   push()
   rotate(i)
   fill (r, g, b)
   rect(200, 0, h, 1)
   pop()

 }

 start += 0.01
pop();


//heart
push();
translate(canvasWidth/2, canvasHeight/2 + -25);
//noStroke();
strokeWeight(1)
//stroke(255)
for (let i=0; i<num; i++) {
  let t = 360/num * i
  let x = sqrt(2) * pow(sin(t), 3)
  let y = pow(-cos(t), 3) - pow(cos(t), 2) + 2 *cos(t)

  let r = map(i, 0, num, 255, 255); 
  let g = map(i, 0, num, 192, 105);   
  let b = map(i, 0, num, 203, 135); 

  stroke(r, g, b);
  fill(r, g, b, 128);

  let ellipseSize = map(drumNoise, 0, 200, 5, 30, true);

  ellipse(x * -40, y * -40, ellipseSize, ellipseSize);
  }
pop()


//smaller heart
push();
translate(canvasWidth/2, canvasHeight/2);
//noStroke();
strokeWeight(1)
//stroke(255)
for (let i=0; i<nim; i++) {
  let t = 360/num * i
  let x = sqrt(2) * pow(sin(t), 3)
  let y = pow(-cos(t), 3) - pow(cos(t), 2) + 2 *cos(t)

  //let noiseValue = map(i, 0, nim, 0, otherNoise);

  if (round(otherNoise) % 2 === 0) {
    stroke(209, 233, 246); //lightblue
  } 
  else if (round(otherNoise) % 3 ===0)  {
    stroke(215, 195, 241);//lightpurple
  }
  else if (round(otherNoise) % 5 ===0) {
    stroke(212, 231, 197); //light green 
  }
  else {
    stroke(249, 247, 201);//lightyello
  }
  
  //let ellipseSize = map(otherNoise, 0, 200, 5, 30, true);
  ellipse(x * -5, y * -5, 10, 10);

  }
pop()

}

push()
fill (0,100);
rect (50,canvasHeight-350,250,325)
fill (255)
textSize (24);
text ('counter: ' + counter, 100, canvasHeight-300)
text ('seconds: ' + secondsCounter, 100, canvasHeight-250)
text ('vocal: ' + round(vocal), 100, canvasHeight-200);
text ('bass: ' + round(bass), 100, canvasHeight-150);
text ('drum: ' + round(drum), 100, canvasHeight-100);
text ('other: ' + round(other), 100, canvasHeight-50); 
pop()
 