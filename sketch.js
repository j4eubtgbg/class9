var a;
let e;
function setup() {
  createCanvas(400,400);
a = createSprite(200,200,50,50);
e = createEdgeSprites();
a.velocityX = 1;
a.velocityY = 1;
a.shapeColor = 'red';
}

function draw() 
{
  background(30);
if (keyIsDown(UP_ARROW)){
  a.y = a.y - 5;
}

if (keyIsDown(DOWN_ARROW)){
  a.y = a.y + 5;
}

if (keyIsDown(LEFT_ARROW)){
  a.x = a.x- 5;
}

if (keyIsDown(RIGHT_ARROW)){
  a.x = a.x + 5;
}
a.bounceOff(e);

  drawSprites();
}