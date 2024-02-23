//Max and Sinan, PLEASE don't edit or delete this code:
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

If you're the sort of person who looks at the source code of webpages, try our challenge:

https://banana-news.github.io/reports/share_this_page.html

*/
const faceSelect = document.getElementById("face-select");
const fruitSelect = document.getElementById("fruit-select");
const combineButton = document.getElementById("combine-button");
const faceImage = document.getElementById("face-image");
const fruitImage = document.getElementById("fruit-image");
//urls:
/*
const billgates = 'https://github.com/banana-news/reports/blob/main/docs/images/billgates.png';
const elonmusk = 'https://github.com/banana-news/reports/blob/main/docs/images/elon.png';
const alberteinstein = 'https://github.com/banana-news/reports/blob/main/docs/images/einstein.png';
const joebiden = 'https://github.com/banana-news/reports/blob/main/docs/images/joebiden.png';
const donaldtrump = 'https://github.com/banana-news/reports/blob/main/docs/images/trump.png';*/

combineButton.addEventListener("click", function () {
  const faceValue = faceSelect.value;
  const fruitValue = fruitSelect.value;
  faceImage.src = faceValue;
  fruitImage.src = fruitValue;
});