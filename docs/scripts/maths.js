var q1o1 = document.getElementById("q1o1");
var q1o2 = document.getElementById("q1o2");
var q1o3 = document.getElementById("q1o3");

var score=0;

function checkQ1Answer(){
    if(q1o1.checked){
        score++;
    }
}