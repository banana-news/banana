// and , Please ask  before editing or deleting this code
/*
[]
 []
 []]]
 []]]]]]
  []]]]]]]
   []]]]]]]]
     []]]]]]]]
       []]]]]]]]]]
         []]\]]]]]]]]]]
           []]]]]]]]]
|
|___     ____      ___     ____      ___     ____            ___     ___               __
|   \   /   |   | /   \   /   |   | /   \   /   |         | /   \   /___\   |  |   |  (__ 
|___/   \__/ \  |/    |   \__/ \  |/    |   \__/ \        |/    |   \____   \__/\__/   __)

  _____________________________________________________________________________________________________________________________
 |                                                                                                                             |
 |   __                                                                            |                        __                 | 
 |  |  \   __   _   _  |  __            |     _      _ __   __   __|         __    |/     _   _            /__[]   _  __  |    |
 |  |__/  /__\ / \ | \ | /__\   |  |  | |__  / \   |/ /__\ /  | /  |   | |  (__    |\  | / \ / \ |  |  |   |   | |/  (__ _|__  |
 |  |     \__  \_/ |_/ | \__    \_/ \_/ |  | \_/   |  \__  \_/ \\_/|   \_/\  __)   | \ |/  | \_/ \_/ \_/   |   | |    __) |_/  |
 |                 |                                                                                                           |
 |_____________________________________________________________________________________________________________________________|


If you're the sort of person who looks at the source code of webpages, try our challenge:

https://banana-news.github.io/banana/share_this_page.html

*/
let x = 100;
let y = 325;

let jumpHeight = -8;
let gravity = 0.5; 
let velocity = 0; 
let isJumping = false; 

let speed = 5;
let score = 0;

let obstacleX = 350;
let originalObstacleX = obstacleX;
let obstacleY = 330;

let delayFrames;
let lastResetTime = 0;

function setup() {
  createCanvas(400, 400);
  delayFrames = Math.floor(Math.random() * (90 - 60) + 60);
}

function draw() {
  background(255);
  drawGround();

  if (isJumping) {
    y += velocity;
    velocity += gravity;

    if (y >= 325) {
      y = 325;
      isJumping = false; 
      velocity = 0; 
    }
  }

  drawBanana(x, y);

  if (frameCount - lastResetTime >= delayFrames) {
    obstacleX -= speed; 

    if (obstacleX < 50) {
      obstacleX = width;
      delayFrames = Math.floor(Math.random() * (90 - 60) + 60);
      lastResetTime = frameCount; 
      score++;
    }
  }

  drawObstacle(obstacleX, obstacleY);

  if (checkCollision(x, y, obstacleX, obstacleY)) {
    fill(255, 0, 0);
    textSize(30);
    text("GAME OVER", 100, 200);
    noLoop();
  }

  fill(0); 
  textSize(30);
  text("BANANA JUMP", 100, 100);
  fill(0);
  textSize(25);
  text("Score: " + score, 130, 250);
}

function keyPressed() {
  if ((keyCode === 32 || keyCode === 38) && !isJumping) { 
    velocity = jumpHeight;
    isJumping = true;
  }
}

function drawBanana(x, y) {
  fill(255, 225, 53);
  stroke(0);
  strokeWeight(2);
  ellipse(x, y, 50, 50);
  fill(255);
  noStroke();
  ellipse(x + 20, y, 50, 50);
  fill(0);
  rect(x - 20, y + 5, 10, 3);
  rect(x - 20, y, 3, 3);
  rect(x - 13, y, 3, 3);
  strokeWeight(4);
}

function drawObstacle(x, y) {
  fill(0);
  rect(x, y, 20, 20);
}

function drawGround() {
  fill(0);
  rect(50, 350, 300, 2);
}

function checkCollision(bananaX, bananaY, obstacleX, obstacleY) {
  let bananaWidth = 50;
  let bananaHeight = 50;
  let obstacleWidth = 20;
  let obstacleHeight = 20;

  if (bananaX + bananaWidth / 2 > obstacleX && 
      bananaX - bananaWidth / 2 < obstacleX + obstacleWidth && 
      bananaY + bananaHeight / 2 > obstacleY && 
      bananaY - bananaHeight / 2 < obstacleY + obstacleHeight) {
    return true;
  }
  return false;
}
