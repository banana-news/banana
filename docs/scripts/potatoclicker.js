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
var plusOn=false;
var secOn=false;
var plusOnePrice=150;
var plusSecPrice=200;
var numClicks = 0;
var imageWidth=100;


var addingOn=false;
var secondsOn=false;

var plusOne = document.getElementById("+1");
var perSec = document.getElementById("persec");

function addOne(){
    numClicks++;
}
plusOne.on("click", function(){
    if(plusOn){
        addingOn=true;
    }
});
perSec.on("click", function(){
    if(perSec){
        secondsOn=true;
    }
})

        $("#potato").on("click", function(){
            if (!addingOn){
            addOne();
            } else if (addingOn){
                numClicks+=2;
            } 
            if (secondsOn){
                setInterval(addOne, 1000);
            }
            if (numClicks==1){
                $("#results").text(numClicks + " banana");
            }else{
            $("#results").text(numClicks + " bananas");
            }
            if (numClicks>=plusOnePrice){
                plusOn=true;
                plusOnePrice+=100;
                plusOne.removeClass("locked").addClass("unlocked");
                $("#locked5").css("display", "none");
            }
            if (numClicks>=plusSecPrice){
                secOn=true;
                plusSecPrice+=100;
                perSec.removeClass("locked").addClass("unlocked");
                $("#locked6").css("display", "none");
            }
            if (numClicks >= 100) {
                if (!$("#cookie").hasClass("unlocked")) {
                    alert("You unlocked a slice of banana bread!");
                    $("#locked1").css("display", "none");
                    $("#cookie").removeClass("locked").addClass("unlocked");
                    var image = $("<img>");
                    image.attr("width", imageWidth);
                    image.attr("src", "https://static01.nyt.com/images/2023/09/28/multimedia/LH-banana-bread-hkbj/LH-banana-bread-hkbj-square640.jpg");
                    image.appendTo("#cookie");
                }
            }
            if (numClicks >= 250) {
                if (!$("#crocpet").hasClass("unlocked")) {
                    alert("You unlocked golden banana!");
                    $("#locked2").css("display", "none");
                    $("#crocpet").removeClass("locked").addClass("unlocked");
                    var image = $("<img>");
                    image.attr("width", imageWidth);
                    image.attr("src", "https://media.artsper.com/artwork/2181373_1_m.jpg");
                    image.appendTo("#crocpet");
                }
            }
            if (numClicks >= 500) {
                if (!$("#tenthousand").hasClass("unlocked")) {
                    alert("You unlocked a banana mansion!");
                    $("#locked3").css("display", "none");
                    $("#tenthousand").removeClass("locked").addClass("unlocked");
                    var image = $("<img>");
                    image.attr("width", imageWidth);
                    image.attr("src", "https://www.indystar.com/gcdn/-mm-/b6a26d09f539fc72865ff52237a993d8e3491d6c/c=0-30-800-482/local/-/media/Indianapolis/NG/2013/10/21/banana-house.jpg?width=800&height=450&fit=crop&format=pjpg&auto=webp");
                    image.appendTo("#tenthousand");
                }
            }
            if (numClicks >= 1000) {
                if (!$("#million").hasClass("unlocked")) {
                    alert("You unlocked a banana themed A380!");
                    $("#locked4").css("display", "none");
                    $("#million").removeClass("locked").addClass("unlocked");
                    var image = $("<img>");
                    image.attr("width", imageWidth);
                    image.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Bn6zipYS5UIHZnXOi_KqVb1TT8raL3zhMQ&s");
                    image.appendTo("#million");
                }
            }
            if (numClicks>=1500){
                if (!$("#bananas").hasClass("unlocked")){
                    alert("You unlocked 1000000 bananas!")
                    $("#locked7").css("display", "none");
                    $("#bananas").removeClass("locked").addClass("unlocked");
                    var image = $("<img>");
                    image.attr("width", imageWidth);
                    image.attr("src", "https://images.newscientist.com/wp-content/uploads/2019/01/31134057/gettyimages-86304874.jpg?crop=4:3,smart&width=1200&height=900&upscale=true")
                    image.appendTo("#bananas");
                }
            }
        });