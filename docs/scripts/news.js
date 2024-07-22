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
var modal = document.getElementById("myModal");
  var images = document.querySelectorAll(".newsdiv img");
  var modalImg = document.getElementById("modalImage");
  var span = document.getElementsByClassName("close")[0];
function updateModalImage(index) {
  if (index >= 0 && index < images.length) {
    modalImg.src = images[index].src;
    currentIndex = index; // Update the global index
  }
}
function imageLeft(){
  updateModalImage(currentIndex - 1);
}function imageRight(){
  updateModalImage(currentIndex + 1);
}
document.addEventListener('DOMContentLoaded', (event) => {
  
  // Modal
  
  /*
  images.forEach((image, index) => { // Include the index in the forEach callback
      image.addEventListener('click', function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        document.onkeydown = (e) => {
          e = e || window.event;
          if (e.keyCode === 37) { // Left arrow key
            const prevIndex = index - 1;
            if (prevIndex >= 0) { // Check if the previous index exists
              modalImg.src = images[prevIndex].src;
            }
          } else if (e.keyCode === 39) { // Right arrow key
            const nextIndex = index + 1;
            if (nextIndex < images.length) { // Check if the next index exists
              modalImg.src = images[nextIndex].src;
            }
          }
        }
      });
  });
  */
  let currentIndex = 0; // Global variable to keep track of the current image index
  
  
  
  images.forEach((image, index) => {
    image.addEventListener('click', function() {
      modal.style.display = "block";
      updateModalImage(index); // Update modal image to the clicked one
    });
  });
  
  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 37) { // Left arrow key
       imageLeft();
    } else if (e.keyCode === 39) { // Right arrow key
       imageRight();
    }
  };
  

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
          button.textContent = 'READ LESS';
        } else {
          hiddenContent.style.display = 'none';
          button.textContent = 'READ MORE';
        }
      }
    });
  });
});



 