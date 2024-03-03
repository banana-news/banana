//Max and Sinan, Please ask Albert before editing or deleting this code
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

https://banana-news.github.io/reports/share_this_page.html
*/
/*
  _____________________________________________________________________________________________________________________
 |                                                                    _____                                            |
 |                                                                  /                                        |  |  |   |
 |    \        /    ____   |    __    ___    __   __    ____        |         o      __      __       __     |  |  |   |
 |     \  /\  /    /____\  |   /     /   \  /  \ /  \  /____\        \__      |   | /  \    /  \   | /  \    |  |  |   |
 |      \/  \/     \____   |   \__   \___/  |   |   |  \____   /        \     |   |/    |   \__/\  |/    |   o  o  o   |
 |                                                            /          |                                             |
 |                                                                 ______/                                             |
 |_____________________________________________________________________________________________________________________|

 */
 const moneyDisplay = document.getElementById('moneyDisplay');
 let money = 213000000000;
 let receiptPrice = 0;
 let receiptItems = 0;
 const receiptDiv = document.getElementById('receiptDiv');
 
 const bigMac = 5;
 const pizza = 15;
 const book = 20;
 const parrot = 1000;
 const michelinRestaurant = 2000;
 const volksGolf = 40000;
 const tesla = 150000;
 const porsche = 200000;
 const formulaOne = 13000000;
 const airbus = 450000000;
 const house = 350000;
 const mansion = 1800000;
 const whiteHouse = 400000000;
 const burjKhalifa = 2000000000;
 const unitedAirlines = 30000000000;
 const sheratonGrand = 100000000;
 
 
 //etc
 
 function buyItem(item) {
  money = money - item;
  receiptPrice = receiptPrice + item;
  receiptItems++;
  let moneyString = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  moneyDisplay.innerHTML = '$' + moneyString;
}

function sellItem(item) {
  money = money + item;
  receiptPrice = receiptPrice - item;
  receiptItems--;
  let moneyString = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  moneyDisplay.innerHTML = '$' + moneyString;
}


 
 if (money <=0) {
  money = 0;
 }
 
 function showReceipt() {
   receiptDiv.innerHTML = '<p><b>Your Receipt:</b><br>Items: ' + receiptItems + '<br><br>Total: $' + receiptPrice + '</p>';
 }
 