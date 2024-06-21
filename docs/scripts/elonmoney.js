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

 const moneyDisplay = document.getElementById('moneyDisplay');
 let money = 213000000000;
 const maxMoney = 213000000000;
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
 
 let itemsOwned = [];
 
 //etc
 
 function buyItem(item) {
  if(money-item>=0){
  money = money - item;
  itemsOwned.push(item);
  receiptPrice = receiptPrice + item;
  receiptItems++;
  let moneyString = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  moneyDisplay.innerHTML = '$' + moneyString;
  showReceipt(); 
  }
}

function sellItem(item) {
  if(itemsOwned.includes(item)){
  if(money+item<=maxMoney){
  let index=itemsOwned.indexOf(item);
  itemsOwned.splice(index,1);
  money = money + item;
  receiptItems--;
  let moneyString = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  moneyDisplay.innerHTML = '$' + moneyString;
  showReceipt();
  }
}
}


 
 if (money <=0) {
  money = 0;
 }

 function showReceipt(){
  receiptDiv.innerHTML = '<h2><b>Your Receipt:</b></h2><br><p><b>Items</b>: ' + receiptItems + '<br><br><b>Total:&nbsp;</b> $' + receiptPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</p>';
 }
 
   
 
 