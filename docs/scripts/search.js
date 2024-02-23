/*Max and Sinan, please ask Albert before editing or deleting this code.*/
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
var searchbar = document.getElementById('searchbar');
searchbar.addEventListener("keypress", function(event){
    if (event.key =='Enter') {
        search();
    }
});
function search() {
    var searchbar = document.getElementById("searchbar").value;
    if (searchbar == "") {
        alert("Please enter a search term");
    } else {
        window.location.href = "searchresults.html?q=" + encodeURIComponent(searchbar);
    }
}