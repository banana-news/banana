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

document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.querySelector('.news-container');
  const newsDivs = Array.from(newsContainer.children).reverse(); // Reverse the order to put the newest first

  newsContainer.innerHTML = ''; // Clear the container

  // Re-append the newsDivs in the reversed order
  newsDivs.forEach((newsDiv, index) => {
      // Update data-index attributes to ensure they remain correct
      const button = newsDiv.querySelector('button[data-index]');
      const hidden = newsDiv.querySelector('.hidden');
      button.setAttribute('data-index', index);
      hidden.setAttribute('data-index', index);

      newsContainer.appendChild(newsDiv);
  });

  const hiddens = document.getElementsByClassName('hidden');
  let isReadMore = true;

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

  const buttons = document.querySelectorAll('button[data-index]');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const index = this.getAttribute('data-index');
          revealText(hiddens[index], this);
      });
  });

  // Image click modal functionality remains the same
  let documentImages = newsContainer.getElementsByTagName('img');
  const modalContentDiv = document.getElementsByClassName('modal-content')[0];

  for (let image of documentImages) {
      image.onclick = function() {
          const modalImage = document.getElementById('modalImage');
          modalImage.src = image.src;
          openModal();
      }
  }
});

 