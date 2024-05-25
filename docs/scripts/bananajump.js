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
function setup() {
    createCanvas(400, 400);

    var x = 100;
    var y = 325;

    var jumpHeight = -8;
    var gravity = 0.5; 
    var velocity = 0; 
    var isJumping = false; 
    var replayButton = document.getElementById("replaybutton");

    var speed = 4;

    var obstacleX = 350;
    var originalObstacleX = obstacleX;
    var obstacleY = 330;

    var delayFrames = floor(random(60, 90));
    var lastResetTime = 0;

    var drawBanana = function(x, y) {
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
    };

    var drawObstacle = function(x, y) {
        fill(0);
        rect(x, y, 20, 20);
    };

    var drawGround = function() {
        fill(0);
        rect(50, 350, 300, 2);
    };

    var checkCollision = function(bananaX, bananaY, obstacleX, obstacleY) {
        var bananaWidth = 50;
        var bananaHeight = 50;
        var obstacleWidth = 20;
        var obstacleHeight = 20;

        if (bananaX + bananaWidth / 2 > obstacleX && 
            bananaX - bananaWidth / 2 < obstacleX + obstacleWidth && 
            bananaY + bananaHeight / 2 > obstacleY && 
            bananaY - bananaHeight / 2 < obstacleY + obstacleHeight) {
            return true;
        }
        return false;
    };

    draw = function() {
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
                delayFrames = floor(random(60, 90));
                lastResetTime = frameCount; 
            }
        }

        drawObstacle(obstacleX, obstacleY);

        if (checkCollision(x, y, obstacleX, obstacleY)) {
            fill(255, 0, 0);
            textSize(30);
            text("GAME OVER", 100, 200);
            replayButton.style.display="block";
            noLoop();
        }

        fill(0); 
        textSize(30);
        text("BANANA JUMP", 100, 100);
    };

    keyPressed = function() {
        if ((keyCode === 32 || keyCode === 38) && !isJumping) { 
            velocity = jumpHeight;
            isJumping = true;
        }
    };
}