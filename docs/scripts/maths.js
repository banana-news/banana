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
 |  |  \   __   _   _  |  __            |     _      _ __   __   __|         __    |/     _   _            /__ o   _  __  |    |
 |  |__/  /__\ / \ | \ | /__\   |  |  | |__  / \   |/ /__\ /  | /  |   | |  (__    |\  | / \ / \ |  |  |   |   | |/  (__ _|__  |
 |  |     \__  \_/ |_/ | \__    \_/ \_/ |  | \_/   |  \__  \_/ \\_/|   \_/\  __)   | \ |/  | \_/ \_/ \_/   |   | |    __) |_/  |
 |                 |                                                                                                           |
 |_____________________________________________________________________________________________________________________________|


If you're the sort of person who looks at the source code of webpages, try our challenge:

https://banana-news.github.io/banana/share_this_page.html
*/
var q1o1 = document.getElementById("q1o1");
var q2o3 = document.getElementById("q2o3");
var q3o3 = document.getElementById("q3o3");

var q1progress = document.querySelector(".q1progress");
var q2progress = document.querySelector(".q2progress");
var q3progress = document.querySelector(".q3progress");
var testNotification = document.querySelector('.test-notification');

var score = 0;

function checkQ1Answer() {
    if (q1o1.checked) {
        score++;
        q1progress.style.backgroundColor = 'green';
        showNotification("Correct!");
    } else {
        q1progress.style.backgroundColor = 'red';
        showNotification("Incorrect. You will learn this.");
    }
}

function checkQ2Answer() {
    if (q2o3.checked) {
        score++;
        q2progress.style.backgroundColor = 'green';
        showNotification("Correct!");
    } else {
        q2progress.style.backgroundColor = 'red';
        showNotification("Incorrect. You will learn this.");
    }
}

function checkQ3Answer() {
    if (q3o3.checked) {
        score++;
        q3progress.style.backgroundColor = 'green';
        showNotification("Correct!");
    } else {
        q3progress.style.backgroundColor = 'red';
        showNotification("Incorrect. You will learn this.");
    }
}

function showNotification(message) {
    testNotification.style.backgroundColor = 'green';
    testNotification.innerHTML = message;
    testNotification.style.display = 'block';
    testNotification.style.animation = 'show-notification 3s ease';
    
    setTimeout(function () {
        testNotification.style.display = 'none';
    }, 3000);
}

// Check score after all questions
function checkScore() {
    if (score >= 3) {
        showNotification("Congratulations! You have proven you already know this skill!");
        let img = document.createElement("img");
        img.src = 'https://steamuserimages-a.akamaihd.net/ugc/89348497015452809/8F44DDABF15146AC19AC0782379CD96F472395C5/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true';
        img.width = '200';
        document.body.appendChild(img);
    } else {
        showNotification("Time to do the module!");
    }
}
