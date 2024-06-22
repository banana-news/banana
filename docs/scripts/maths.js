var q1o1 = document.getElementById("q1o1");
var q1o2 = document.getElementById("q1o2");
var q1o3 = document.getElementById("q1o3");

var q1progress = document.getElementById("q1progress");
var q2progress = document.getElementById("q2progress");
var q3progress = document.getElementById("q3progress");
var testNotification = document.getElementById("test-notification");

var score=0;

function checkQ1Answer(){
    if(q1o1.checked){
        score++;
        q1progress.style.backgroundColor='green';
        testNotification.style.backgroundColor='green';
        testNotification.innerHTML="Correct!";

    }else{
        q1progress.style.backgroundColor='red';
        testNotification.style.backgroundColor='grey';
        testNotification.innerHTML="Incorrect. You will learn this";
    }
}
function checkQ2Answer(){
    if(q2o3.checked){
        score++;
        q2progress.style.backgroundColor='green';
        testNotification.style.backgroundColor='green';
        testNotification.innerHTML="Correct!";
    }else{
        q2progress.style.backgroundColor='red';
        testNotification.style.backgroundColor='grey';
        testNotification.innerHTML="Incorrect. You will learn this";
    }
}
function checkQ3Answer(){
    if(q3o3.checked){
        score++;
        q3progress.style.backgroundColor='green';
        testNotification.style.backgroundColor='green';
        testNotification.innerHTML="Correct!";
    }else{
        q3progress.style.backgroundColor='red';
        testNotification.style.backgroundColor='grey';
        testNotification.innerHTML="Incorrect. You will learn this";
    }
}

if(score>=3){
testNotification.style.backgroundColor='green';
testNotification.innerHTML="Congratulations! You have proven you already know this skill!"
let img = document.createElement("img");
img.src='https://steamuserimages-a.akamaihd.net/ugc/89348497015452809/8F44DDABF15146AC19AC0782379CD96F472395C5/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true';
img.width='200';
document.body.appendChild(img);
}else{
    testNotification.style.backgroundColor='green';
    testNotification.innerHTMl="Time to do the module!";
}