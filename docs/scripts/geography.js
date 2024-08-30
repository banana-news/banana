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
const capitals = [
  { country: "China", capital: "Beijing" },
  { country: "India", capital: "New Delhi" },
  { country: "United States", capital: "Washington, D.C." },
  { country: "Australia", capital: "Canberra" },
  { country: "France", capital: "Paris" },
  { country: "Brazil", capital: "Brasilia" },
  { country: "Canada", capital: "Ottawa" },
  { country: "Russia", capital: "Moscow" },
  { country: "Japan", capital: "Tokyo" },
  { country: "South Korea", capital: "Seoul" },
  { country: "United Kingdom", capital: "London" },
  { country: "Italy", capital: "Rome" },
  { country: "Mexico", capital: "Mexico City" },
  { country: "Argentina", capital: "Buenos Aires" },
  { country: "South Africa", capital: "Pretoria" },
  { country: "Egypt", capital: "Cairo" },
  { country: "Turkey", capital: "Ankara" },
  { country: "Saudi Arabia", capital: "Riyadh" },
  { country: "Indonesia", capital: "Jakarta" },
  { country: "Nigeria", capital: "Abuja" },
  { country: "Spain", capital: "Madrid" },
  { country: "Sweden", capital: "Stockholm" },
  { country: "Norway", capital: "Oslo" },
  { country: "Netherlands", capital: "Amsterdam" },
  { country: "Switzerland", capital: "Bern" },
  { country: "Greece", capital: "Athens" },
  { country: "Chile", capital: "Santiago" },
  { country: "Colombia", capital: "Bogota" },
  { country: "Malaysia", capital: "Kuala Lumpur" },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.innerText = `What is the capital of ${capitals[currentQuestionIndex].country}?`;
}

function checkAnswer() {
  capitals.splice(currentQuestionIndex, 1);
  const answerElement = document.getElementById("answer");
  const resultElement = document.getElementById("result");
  if (answerElement.value.trim().toLowerCase() === capitals[currentQuestionIndex].capital.toLowerCase()) {
      resultElement.innerText = "Correct!";
      resultElement.style.color = "green";
      score++;
      
      //capitals.splice(index, currentQuestionIndex);
  } else {
      resultElement.innerText = `Wrong! The correct answer is ${capitals[currentQuestionIndex].capital}.`;
      resultElement.style.color = "red";
  }
}

function nextQuestion() {
  if(capitals.length>0){
  currentQuestionIndex = (currentQuestionIndex + 1) % capitals.length;
  displayQuestion();
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
  }else{

    ///To max: If you want to change what happens when you completed the quiz, put anything you want inside this else statement
    alert("You've completed the quiz! Your score is "+score+"/29");
    ///
  }
}

displayQuestion();
