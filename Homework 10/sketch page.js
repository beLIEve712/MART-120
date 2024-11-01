
var x = 200;
var xMovement = 2;
var y = 200;
var yMovement = 2;
var size = 22;
var count = 0;
var sizeDirection = 3;

function setup() 
  {
    createCanvas(400,400);
 
 
  xMovement = random(0, 11);
  yMovement = random(0, 11);
   }
  
  function draw() 
  {
    background(52,198,235);

    fill(0,0,0);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
      sizeDirection *=-1;
      count = 0;
    }
    text('Self Portrait',20,30);

    fill(255, 206,180);
    circle(x, 100, 100);

    if(x >= 400 || x <= 0) {
      xMovement = -xMovement;
    }
    x += xMovement;

    fill(98,204,179);
    square(x,y,95);


    fill(0,0,0);
    circle(180, 95, 15);

    fill(0,0,0);
    circle(215, 95, 15);

    line(170,80, 190,78);
    line(205,78, 225,80);

    fill(255, 206,180)
    triangle(x -7,110, x -2,105, x + 3,110);


    arc(198, y - 80, 30, 20, 0, PI);


    fill(161, 50, 50);
    ellipse(200, 50, 100, 50);

    fill(0,0,0)
    rect(153, 245, 35, 80);
    rect(213, 245, 35, 80);

    line(153, 170, 110, 200);
    line(248, 170, 290, 200);

    push();
    strokeWeight(10);
    point(110,y);
    point(290,y);
    pop();

    if (y >= height || y <= 0) {
      yMovement = -yMovement;
    }
    y += yMovement;



    fill(0,0,0);
    textSize(16);
    text('Madi Hixson',300,375);
  }