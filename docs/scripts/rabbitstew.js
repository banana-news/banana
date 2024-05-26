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
let rabbitX = 100;
let rabbitY = 100;
let directionX;
let directionY;
let speed = 2;
let x = 200;
let y = 380;
let collectedItems = [];
let rabbitCollected = false;

let stationaryItems = [
    { name: "Leek", x: 190, y: 100 },
    { name: "Potato", x: 150, y: 200 },
    { name: "Onion", x: 250, y: 300 },
    { name: "Rosemary", x: 340, y: 150 },
    { name: "Garlic", x: 300, y: 250 },
    { name: "Mushroom", x: 150, y: 350 },
    { name: "Tomato", x: 250, y: 50 }
];

function setup() {
    createCanvas(400, 400);
    directionX = random(-1, 1);
    directionY = random(-1, 1);
}

function draw() {
    background(220);
    fill(171, 103, 0);
    rect(200, 350, 50, 50);
    fill(220);
    rect(0, 0, 100, 400);
    fill(0);
    textSize(14);
    text("YOU'VE\nCOLLECTED:", 10, 30);

    for (let i = 0; i < collectedItems.length; i++) {
        text(collectedItems[i].name, 10, 90 + i * 40);
    }

    stationaryItems.forEach(item => {
        switch (item.name) {
            case "Leek":
                drawLeek(item.x, item.y);
                break;
            case "Potato":
                drawPotato(item.x, item.y);
                break;
            case "Onion":
                drawOnion(item.x, item.y);
                break;
            case "Rosemary":
                drawRosemary(item.x, item.y);
                break;
            case "Garlic":
                drawGarlic(item.x, item.y);
                break;
            case "Mushroom":
                drawMushroom(item.x, item.y);
                break;
            case "Tomato":
                drawTomato(item.x, item.y);
                break;
        }
    });

    if (!rabbitCollected) {
        rabbitX += directionX * 5;
        rabbitY += directionY * 5;

        rabbitX = constrain(rabbitX, 0, width - 30);
        rabbitY = constrain(rabbitY, 0, height - 30);

        drawRabbit(rabbitX, rabbitY);

        if (frameCount % 60 === 0) {
            directionX = random(-1, 1);
            directionY = random(-1, 1);
        }

        if (isColliding(rabbitX, rabbitY, x, y)) {
            collectedItems.push({ name: "Rabbit" });
            rabbitCollected = true;
        }
    }

    stationaryItems.forEach((item, index) => {
        if (isColliding(item.x, item.y, x, y)) {
            collectedItems.push({ name: item.name });
            stationaryItems.splice(index, 1);
        }
    });

    let stewpot = {
        x: 200,
        y: 350,
        width: 50,
        height: 50,
        items: []
    };

    let allItemsInStewpot = function() {
        return stewpot.items.length === stationaryItems.length;
    };

    let isCollidingWithStewpot = function(playerX, playerY) {
        return (
            playerX < stewpot.x + stewpot.width &&
            playerX + 20 > stewpot.x &&
            playerY < stewpot.y + stewpot.height &&
            playerY + 20 > stewpot.y
        );
    };

    if (allItemsInStewpot() && rabbitCollected) {
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("RABBIT STEW\nTIME TO EAT!!!!", width / 2, height / 2);
    } else {
        stationaryItems.forEach((item, index) => {
            if (isColliding(item.x, item.y, x, y)) {
                collectedItems.push({ name: item.name });
                stationaryItems.splice(index, 1);
            }
        });

        if (isCollidingWithStewpot(x, y)) {
            stewpot.items = collectedItems.slice();
            collectedItems = [];
        }
    }

    if (keyIsPressed && keyCode === LEFT_ARROW) {
        x -= speed;
    }
    if (keyIsPressed && keyCode === RIGHT_ARROW) {
        x += speed;
    }
    if (keyIsPressed && keyCode === UP_ARROW) {
        y -= speed;
    }
    if (keyIsPressed && keyCode === DOWN_ARROW) {
        y += speed;
    }

    x = constrain(x, 0, width - 20);
    y = constrain(y, 0, height - 20);

    drawPlayer(x, y);
}

function drawLeek(x, y) {
    fill(0, 128, 36);
    rect(x, y, 10, 30);
    fill(255);
    rect(x, y + 30, 10, 20);
}

function drawPotato(x, y) {
    fill(255, 187, 92);
    ellipse(x, y, 20, 30);
}

function drawOnion(x, y) {
    fill(255, 153, 0);
    ellipse(x, y, 20, 20);
}

function drawRosemary(x, y) {
    fill(0);
    rect(x - 3, y + 15, 2, 10);
    fill(0, 128, 36);
    ellipse(x, y, 15, 30);
}

function drawGarlic(x, y) {
    fill(255);
    ellipse(x, y, 30, 15);
}

function drawMushroom(x, y) {
    fill(255, 153, 0);
    ellipse(x, y, 30, 15);
    rect(x - 4, y, 5, 10);
}

function drawTomato(x, y) {
    fill(255, 0, 0);
    ellipse(x, y, 30, 25);
    fill(0, 128, 36);
    rect(x - 5, y - 15, 10, 5);
}

function drawRabbit(x, y) {
    fill(255, 187, 92);
    rect(x, y, 30, 30);
    triangle(x, y, x + 8, y - 30, x + 15, y);
    triangle(x + 15, y, x + 23, y - 30, x + 30, y);
    fill(0);
    rect(x + 12, y + 15, 5, 5);
    rect(x + 6, y + 8, 2, 2);
    rect(x + 20, y + 8, 2, 2);
}

function drawPlayer(x, y) {
    fill(0);
    rect(x, y, 20, 20);
}

function isColliding(itemX, itemY, playerX, playerY) {
    return (
        itemX < playerX + 20 &&
        itemX + 30 > playerX &&
        itemY < playerY + 20 &&
        itemY + 30 > playerY
    );
}
