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
//document.addEventListener('DOMContentLoaded', function(){

const searchinput = document.getElementById('searchbar');
//const divToShow = document.getElementsByClassName('div-to-show')[0];
const divToShow = document.getElementById('div-to-show');
const container = document.getElementById('container');
const topnav = document.getElementById('myTopnav');

/**/ 
function showSearch(){
  
divToShow.style.display='block';
divToShow.style.animation = 'slideDown 0.5s ease forwards';
//document.addEventListener('DOMContentLoaded', function(){
  container.style.filter='blur(10px);';
//});

/*
divToShow.style.filter = 'none';
document.getElementsByClassName('topnav')[0].style.filter = 'none';*/

setTimeout(function(){
  searchinput.focus();
  topnav.style.backgroundColor='#444444';
},500);

}

//
//
//
//
let isMouseOverDiv1 = false;
let isMouseOverDiv2 = false;
/*
const div1 = divToShow;
const div2 = document.getElementsByClassName('topnav')[0];
*/


//Declaring variables
//const topnav = document.getElementsByClassName('topnav')[0];
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
    divToShow.style.animation='slideUp 0.5s ease forwards';
    container.style.filter='none';
}




/*divToShow.addEventListener('mouseleave',function(){
  
});*/
  
//});