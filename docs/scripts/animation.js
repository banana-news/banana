//Max and Sinan, Please ask Albert before editing or deleting this code
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

https://banana-news.github.io/reports/share_this_page.html
*/
/*
  _____________________________________________________________________________________________________________________
 |                                                                    _____                                            |
 |                                                                  /                                        |  |  |   |
 |    \        /    ____   |    __    ___    __   __    ____        |         o      __      __       __     |  |  |   |
 |     \  /\  /    /____\  |   /     /   \  /  \ /  \  /____\        \__      |   | /  \    /  \   | /  \    |  |  |   |
 |      \/  \/     \____   |   \__   \___/  |   |   |  \____   /        \     |   |/    |   \__/\  |/    |   o  o  o   |
 |                                                            /          |                                             |
 |                                                                 ______/                                             |
 |_____________________________________________________________________________________________________________________|

 */
//Max and Sinan, please ask Albert before editing or deleting any of this code.
///
const searchinput = document.getElementById('searchbar');
const divToShow = document.getElementById('div-to-show');
const container = document.getElementById('container');
const topnav = document.getElementById('myTopnav');
//
//
//
//
//
const topnavLinks = document.querySelectorAll('.topnav a');
//
//
function showSearch(){
  
divToShow.style.display='block';
divToShow.style.animation = 'slideDown 0.5s ease forwards';

  container.style.filter='blur(10px);';





setTimeout(function(){
  searchinput.focus();
},500);

topnav.style.backgroundColor='#444444';
  topnavLinks.forEach(link=>{
    link.style.backgroundColor='#444444';
  });

}


//
//
const topContainer = document.getElementById('top-container');

topContainer.addEventListener('mouseleave', divUp);
//
//
//
//
function divUp() {
  console.log('mouse has left both elements.');
  //
  topnav.style.backgroundColor = '#555555';
  topnavLinks.forEach(link => {
      link.style.backgroundColor = '#555555';
  });
  //
  divToShow.style.animation = 'slideUp 0.5s ease forwards';
  container.style.filter = 'none';
}