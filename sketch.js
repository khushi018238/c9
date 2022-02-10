var box;
function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,10,10);
}

function draw() 
{
  background(30);
  if (keyDown("right")){
    box.x=box.x+3;
  }
drawSprites();
}




