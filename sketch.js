//Variable Declared
var quineas= 0;
function setup() {
	createCanvas(800, 800); 
  }

function draw() {
  background(20+quineas,20+quineas,20+quineas);
  
//Monster Text
  strokeWeight(1.5);
  stroke(20,20,20);
fill(20,20,20);
textFont('Copperplate');
textSize(20);
text('Every Monster Slain',80,600);
text('Protects Our Dreams...',510,600);

//Sun Ellipse
strokeWeight(0);
stroke(255,255,255);
fill(247,104+quineas,72);
ellipse(780,30,100,100);

//Sun Lines
strokeWeight(6);
stroke(247,104+quineas,72);
line(720,20,680,25);
line(730,60,690,80);
line(760,90,745,125);

//Handle Ellipse
strokeWeight(0.3);
stroke(0,0,0);
fill(128, 68, 45);
ellipse(412,280,60,250);

//Pommel Ellipse
strokeWeight(0.2);
stroke(255,255,255);
fill(84,84,83);
ellipse(412,132,80,75);

//Pommel Cross Ellipse
strokeWeight(4)
stroke(255,40,40)
line(373,132,450,132)
line(412,95,412,169)

//Blade Rectangle
  fill(181, 176, 176);
  stroke(255,255,255);
  strokeWeight(2);
  rect(350,400,120,400);

//Blade Valley Line
strokeWeight(3.5);
stroke(0,0,0);
fill(0,0,0);
line(413,400,413,800);

//Cross guard Rectangle
strokeWeight(0.3);
stroke(230,230,230);
fill(50,50,50);
rect(235,350,350,50);

//Blood Lines
strokeWeight(9.2);
stroke(156, 11, 11);
fill(156, 11, 11);
line(408,450,406,500+quineas);
line(380,470,375,520+quineas);
line(370,460,400,510+quineas);
line(440,500,400,550+quineas);
line(460,560,470,580+quineas);
line(450,580,440,600+quineas);
line(410,680,420,700+quineas);
line(380,680,400,700+quineas);

//Header Text
strokeWeight(2);
fill(230,230,230);
textFont('Copperplate');
textSize(40);
text('Protect Our Dreams',185,80);

//Cursor Finder (For purpose of Coding)
strokeWeight(0);
ellipse(mouseX,mouseY,25,25);
}

//Interactive Variable Settings
function mousePressed(){
if (quineas>=240) {
  quineas=0;} else {
    quineas= quineas+4;
}
}