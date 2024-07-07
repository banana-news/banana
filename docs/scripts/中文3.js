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
document.addEventListener('DOMContentLoaded', (event) => {
  // Modal
  var modal = document.getElementById("myModal");
  var images = document.querySelectorAll(".newsdiv img");
  var modalImg = document.getElementById("modalImage");
  var span = document.getElementsByClassName("close")[0];
  
  images.forEach((image) => {
    image.addEventListener('click', function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  span.onclick = function() {
    modal.style.display = "none";
  }

  // Click message
  var clickMessage = document.getElementById("clickmessage");
  var closeButton = document.getElementById("closebutton"); // Corrected id

  if (closeButton) {
    closeButton.addEventListener('click', function() {
      clickMessage.style.display = "none";
    });
  } else {
    console.error('Button with id "closebutton" not found.');
  }

  // Read more functionality
  var buttons = document.querySelectorAll(".newsdiv button");
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      var index = button.getAttribute('data-index');
      var hiddenContent = document.querySelector('.hidden[data-index="' + index + '"]');
      if (hiddenContent) {
        if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
          hiddenContent.style.display = 'block';
          button.textContent = '读更少';
        } else {
          hiddenContent.style.display = 'none';
          button.textContent = '读更多';
        }
      }
    });
  });
});



 