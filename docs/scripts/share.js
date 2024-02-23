//Max and Sinan, please ask me before editing or deleting this:
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
function htmlShare() {
    navigator.clipboard.writeText('<a href="https://banana-news.github.io/reports">https://banana-news.github.io/reports</a>');
    alert('HTML code copied.');
}
function linkCopy() {
    navigator.clipboard.writeText('https://banana-news.github.io/reports');
    alert('Link copied.');
}
function embedShare() {
    navigator.clipboard.writeText('<embed type="text/html" src="https://banana-news.github.io/reports"  width="600" height="400">');
    alert('Embed code copied.');
}
const downloadlink = document.getElementById('downloadlink');
downloadlink.addEventListener("click", function(){
    alert('Image downloaded. (It should be in your "Downloads" folder.)');
});