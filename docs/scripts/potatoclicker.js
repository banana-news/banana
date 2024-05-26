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

var numClicks = 0;
        $("#potato").on("click", function(){
            numClicks++;
            $("#results").text(numClicks + " potatoes");

            if (numClicks >= 100) {
                if (!$("#cookie").hasClass("unlocked")) {
                    alert("You unlocked a chocolate chip cookie!");
                    $("#locked1").css("display", "none");
                    $("#cookie").removeClass("locked").addClass("unlocked");
                }
            }
            if (numClicks >= 250) {
                if (!$("#crocpet").hasClass("unlocked")) {
                    alert("You unlocked a pet crocodile!");
                    $("#locked2").css("display", "none");
                    $("#crocpet").removeClass("locked").addClass("unlocked");
                }
            }
            if (numClicks >= 500) {
                if (!$("#tenthousand").hasClass("unlocked")) {
                    alert("You unlocked $10000!");
                    $("#locked3").css("display", "none");
                    $("#tenthousand").removeClass("locked").addClass("unlocked");
                }
            }
            if (numClicks >= 1000) {
                if (!$("#million").hasClass("unlocked")) {
                    alert("You unlocked $1000000!");
                    $("#locked4").css("display", "none");
                    $("#million").removeClass("locked").addClass("unlocked");
                }
            }
        });