function setup() 
  {
    createCanvas(400,400);
  }
  
  function draw() 
  {
    background(52,198,235);

    fill(0,0,0);
    text('Self Portrait',20,30);

    fill(255, 206,180);
    circle(200, 100, 100);

    fill(98,204,179);
    square(153,150,95);


    fill(0,0,0);
    circle(180, 95, 15);

    fill(0,0,0);
    circle(215, 95, 15);

    line(170,80, 190,78);
    line(205,78, 225,80);

    fill(255, 206,180)
    triangle(193,110, 198,105, 203,110);

    arc(198, 120, 30, 20, 0, PI);

    fill(161, 50, 50);
    ellipse(200, 50, 100, 50);

    fill(0,0,0)
    rect(153, 245, 35, 80);
    rect(213, 245, 35, 80);

    line(153, 170, 110, 200);
    line(248, 170, 290, 200);

    push();
    strokeWeight(10);
    point(110,200);
    point(290,200);
    pop();



    fill(0,0,0);
    text('Madi Hixson',300,375);
  }