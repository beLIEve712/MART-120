var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeX2 = 40;
var shapeY2 = 60;

var shapeXspeed;
var shapeYspeed;
var shapeX2speed;
var shapeY2speed;

var mouseXshape;
var mouseYshape;

function setup() {
  createCanvas(400, 500);

  shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5))+1);
  shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5))+1);
}
function draw()
{
 background(67,15,70);
 stroke(0);
 fill(0);

 rect(0,0,width,10);
 rect(0,0,10,height);
 rect(0,height-10, width,10);
 rect(width-10,0,10,height-50);

 textSize(16);
 text("Exit", width-50, height-50)

 fill(123,40,123);
 circle(characterX, characterY, 25);

 

 if(keyIsDown(w))
 {
    characterY -= 10;
 }
 if(keyIsDown(s))
  {
    characterY += 10;
  }
 if(keyIsDown(a))
  {
    characterX -= 10;
  }
 if(keyIsDown(d))
   {
    characterX += 10;
    }

    fill(174,70,54);
    circle(shapeX,shapeY,10);

    shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5))+1);
    shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5))+1);

    shapeX += shapeXspeed;
    shapeY += shapeYspeed;

    

    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY > height;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }


    fill(103,900,14);
    circle(shapeX2,shapeY2,40);

    shapeX2speed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
    shapeY2speed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);

    shapeX2 += shapeX2speed;
    shapeY2 += shapeY2speed;

    if(shapeX2 > width)
        {
            shapeX2 = 0;
        }
        if(shapeX2 < 0)
        {
            shapeX2 = width;
        }
        if(shapeY2 > height)
        {
            shapeY2 > height;
        }
        if(shapeY2 < 0)
        {
            shapeY2 = height;
        }


    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    fill(120,130,140);
    circle(mouseXshape, mouseYshape, 25);
}

function mouseClicked()
{
    mouseXshape = mouseX;
    mouseYshape = mouseY;
}
