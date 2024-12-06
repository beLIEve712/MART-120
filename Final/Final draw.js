
var snowflakeX = [];
var snowflakeY = [];
var snowflakeSpeed = [];
var snowflakeSize = [];
var snowflakeCount = 50; 

function setup() {
  createCanvas(800, 600); 

  // Random snowflakes
  for (var i = 0; i < snowflakeCount; i++) {
    snowflakeX.push(Math.random() * width); 
    snowflakeY.push(Math.random() * height); 
    snowflakeSpeed.push(Math.random() * 2 + 1); 
    snowflakeSize.push(Math.random() * 10 + 5); 
  }
}

function draw() {
  background(135, 206, 235); 

  // Draw ground
  fill(220); 
  rect(0, height * 0.75, width, height * 0.25);

  // Draw mountains
  drawMountain(-50, height * 0.75, 250, height * 0.75, 100, height * 0.1); 
  drawMountain(200, height * 0.75, 500, height * 0.75, 350, height * 0.15); 
  drawMountain(400, height * 0.75, 700, height * 0.75, 550, height * 0.2); 
  drawMountain(100, height * 0.75, 350, height * 0.75, 225, height * 0.05); 
  drawMountain(500, height * 0.75, 800, height * 0.75, 650, height * 0.1); 

  // Draw snow caps
  drawSlimSnowCap(100, height * 0.1, 40); 
  drawSlimSnowCap(350, height * 0.15, 50); 
  drawSlimSnowCap(550, height * 0.2, 60);
  drawSlimSnowCap(225, height * 0.05, 35); 
  drawSlimSnowCap(650, height * 0.1, 40); 

  // Draw snow runway
  drawRunway(0, height * 0.85, 800, height * 0.75, 60); 

  // Draw person
  drawPerson(150, height * 0.8); 

  // Draw and move snowflakes
  for (var i = 0; i < snowflakeCount; i++) {
    drawSnowflake(snowflakeX[i], snowflakeY[i], snowflakeSize[i]); 
    snowflakeY[i] += snowflakeSpeed[i]; 

    // Reset snowflake if out of bounds
    if (snowflakeY[i] > height) {
      snowflakeY[i] = 0;
      snowflakeX[i] = Math.random() * width; 
    }
  }
}

function drawMountain(baseX1, baseY1, baseX2, baseY2, peakX, peakY) 
{
  fill(139, 69, 19);
  triangle(baseX1, baseY1, baseX2, baseY2, peakX, peakY);
}

function drawSlimSnowCap(peakX, peakY, width) 
{
  fill(255); 
  triangle(
    peakX - width / 2, peakY + width, 
    peakX + width / 2, peakY + width, 
    peakX, peakY 
  );
}

function drawRunway(x1, y1, x2, y2, thickness)
 {
  fill(255); 
  noStroke();
  quad(x1, y1, x2, y2, x2, y2 + thickness, x1, y1 + thickness); 
}

function drawPerson(x, y) 
{
  stroke(0); 
  strokeWeight(2);

  // Head
  noFill();
  ellipse(x, y - 10, 15); 

  // Eyes
  fill(0);
  ellipse(x - 4, y - 12, 1.5, 1.5); 
  ellipse(x + 4, y - 12, 1.5, 1.5); 

 //smile
  noFill();
  arc(x, y - 8, 8, 4, radians(20), radians(160)); 

  //Body
  line(x, y, x, y + 30);
  line(x, y + 10, x - 15, y - 5); 
  line(x, y + 10, x + 15, y + 20); 
  line(x, y + 30, x - 10, y + 50); 
  line(x, y + 30, x + 10, y + 50); 

  // Skis
  fill(0,82,33); 
  noStroke();
  push();
  translate(x - 15, y + 48); 
  rotate(radians(-15)); 
  rect(0, 0, 40, 5);
  pop();

  push();
  translate(x + 5, y + 48); 
  rotate(radians(-15)); 
  rect(0, 0, 40, 5);
  pop();
}

function drawSnowflake(x, y, size) {
  stroke(255); 
  strokeWeight(2); 
  line(x, y - size, x, y + size);
  line(x - size, y, x + size, y);
  line(x - size * 0.7, y - size * 0.7, x + size * 0.7, y + size * 0.7); // Top-left to bottom-right
  line(x - size * 0.7, y + size * 0.7, x + size * 0.7, y - size * 0.7); // Bottom-left to top-right
}
