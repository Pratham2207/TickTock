function setup(){
  createCanvas(400,400);
  angleMode(DEGREES)
}
function draw(){
  background(0);
  translate(200,200);
  rotate(-90);
  var hr = hour();
  var mn = minute();
  var sc = second();

  
  strokeWeight(8);
  stroke(255,100,150);
  noFill();
  var end = map(sc,0,60, 0 ,360);
  arc(0,0,300,300,0,end);

  stroke(150,100,255);
  var end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);

  stroke(150,255,100);
  var end3 = map(hr % 12,0,12,0,360);
  arc(0,0,260,260,0,end3);

  push();
  rotate(end);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();

  push();
  rotate(end2);
  stroke(150,100,255);
  line(0,0,75,0);
  pop();

  push();
  rotate(end3);
  stroke(150,255,100);
  line(0,0,50,0);
  pop();

  stroke(255);
  point(0,0);
}