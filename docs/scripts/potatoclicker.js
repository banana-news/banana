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
var imageWidth=100;
        $("#potato").on("click", function(){
            numClicks++;
            if (numCilcks==1){
                $("#results").text(numClicks + "potato");
            }else{
            $("#results").text(numClicks + " potatoes");
            }
            if (numClicks >= 100) {
                if (!$("#cookie").hasClass("unlocked")) {
                    alert("You unlocked a chocolate chip cookie!");
                    $("#locked1").css("display", "none");
                    $("#cookie").removeClass("locked").addClass("unlocked");
                    var image = $("<img>");
                    image.attr("width", imageWidth);
                    image.attr("src", "https://assets.bonappetit.com/photos/5ca534485e96521ff23b382b/1:1/w_2700,h_2700,c_limit/chocolate-chip-cookie.jpg");
                    image.appendTo("#cookie");
                }
            }
            if (numClicks >= 250) {
                if (!$("#crocpet").hasClass("unlocked")) {
                    alert("You unlocked a pet crocodile!");
                    $("#locked2").css("display", "none");
                    $("#crocpet").removeClass("locked").addClass("unlocked");
                    var image = $("<img>");
                    image.attr("width", imageWidth);
                    image.attr("src", "https://cdn.britannica.com/84/198884-050-A37B8971/crocodile-Nile-swath-one-sub-Saharan-Africa-Madagascar.jpg");
                    image.appendTo("#cookie");
                }
            }
            if (numClicks >= 500) {
                if (!$("#tenthousand").hasClass("unlocked")) {
                    alert("You unlocked a house!");
                    $("#locked3").css("display", "none");
                    $("#tenthousand").removeClass("locked").addClass("unlocked");
                    var image = $("<img>");
                    image.attr("width", imageWidth);
                    image.attr("src", "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg");
                    image.appendTo("#cookie");
                }
            }
            if (numClicks >= 1000) {
                if (!$("#million").hasClass("unlocked")) {
                    alert("You unlocked a private A380!");
                    $("#locked4").css("display", "none");
                    $("#million").removeClass("locked").addClass("unlocked");
                    var image = $("<img>");
                    image.attr("width", imageWidth);
                    image.attr("src", "https://upload.wikimedia.org/wikipedia/commons/0/09/A6-EDY_A380_Emirates_31_jan_2013_jfk_%288442269364%29_%28cropped%29.jpg");
                    image.appendTo("#cookie");
                }
            }
        });