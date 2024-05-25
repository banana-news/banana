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

 const hiddens = document.getElementsByClassName('hidden');
 let isReadMore = true;
let newsContainer = document.getElementsByClassName('news-container')[0];
let documentImages = newsContainer.getElementsByTagName('img');
const modalContentDiv = document.getElementsByClassName('modal-content')[0];

for (let image of documentImages){
  image.onclick= function(){
    const modalImage = document.getElementById('modalImage');
    modalImage.src=image.src;
    openModal();
  }
}
 
 function revealText(text, button) {
   if (isReadMore) {
     text.style.display = 'block';
     button.textContent = 'READ LESS';
     button.onclick = function() {
       revealText(text, button);
     };
   } else {
     text.style.display = 'none';
     button.textContent = 'READ MORE';
     button.onclick = function() {
       revealText(text, button);
     };
   }
   isReadMore = !isReadMore;
 }
 