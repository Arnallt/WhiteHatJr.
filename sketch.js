var box
var box2
var box3
var box4
function setup() {
    createCanvas(400,400);
    box = createSprite(200,200,20,20);  
    box2 = createSprite(100,100,10,30);
    box3 = createSprite(300,300,10,20);
    box4 = createSprite(200,300,20,10);
}

function draw() 
{
  background(30);
  
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 5
  }
  if(keyIsDown(LEFT_ARROW)){
    box2.position.x = box2.position.x - 5
  }
  if(keyIsDown(DOWN_ARROW)){
    box3.position.y = box3.position.y + 5
  }
  if(keyIsDown(UP_ARROW)){
    box4.position.y = box4.position.y - 5
  }
  drawSprites()
}




