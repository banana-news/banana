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

var queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
var searchQuery = searchParams.get("q");
const loadingMessage = document.getElementById('loadingMessage');

document.title = searchQuery + " - Search Results";

var header = document.getElementById("header");
header.textContent = "Search Results for \"" + searchQuery + "\"";
//document.body.appendChild(header);

var searchResultsDiv = document.getElementById("searchResults");

var results = [];

function tiltPage() {
    document.body.style.rotate = '2deg';
    document.body.style.top = '20px';
    document.body.style.position='absolute';
    searchResultsDiv.innerHTML = '<h2>Askew</h2><p>Not in a straight or level position</p>';
    loadingMessage.style.display='none';
}

if (searchQuery.toLowerCase().includes('home') || searchQuery.toLowerCase().includes('index') || searchQuery.toLowerCase().includes('main') || searchQuery.toLowerCase().includes('banana') || searchQuery.toLowerCase().includes('stuff') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('every')) {
    results.push({
        text: 'Home',
        link: 'index.html',
        description: 'The Banana News homepage offers a description of Banana News and links to the different pages.'
    });
} 
if (searchQuery.toLowerCase().includes('news') || searchQuery.toLowerCase().includes('tomato') || searchQuery.toLowerCase().includes('kirin') || searchQuery.toLowerCase().includes('stuff') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('every') || searchQuery.toLowerCase().includes('banana')) {
    results.push({
        text: 'News',
        link: 'news.html',
        description: 'The Banana News news page, including news about tech and politics.'
    });
} 
if (searchQuery.toLowerCase().includes('tech') || searchQuery.toLowerCase().includes('review') || searchQuery.toLowerCase().includes('phone') || searchQuery.toLowerCase().includes('tablet') || searchQuery.toLowerCase().includes('mobile') || searchQuery.toLowerCase().includes('ipad') || searchQuery.toLowerCase().includes('mac') || searchQuery.toLowerCase().includes('laptop') || searchQuery.toLowerCase().includes('apple') || searchQuery.toLowerCase().includes('huawei')|| searchQuery.toLowerCase().includes('lenovo') || searchQuery.toLowerCase().includes('dell') || searchQuery.toLowerCase().includes('hp') || searchQuery.toLowerCase().includes('oppo') || searchQuery.toLowerCase().includes('vivo') || searchQuery.toLowerCase().includes('iqoo') || searchQuery.toLowerCase().includes('oneplus') || searchQuery.toLowerCase().includes('1+') || searchQuery.toLowerCase().includes('realme') || searchQuery.toLowerCase().includes('samsung') || searchQuery.toLowerCase().includes('android') || searchQuery.toLowerCase().includes('pc') || searchQuery.toLowerCase().includes('device') || searchQuery.toLowerCase().includes('snapdragon') || searchQuery.toLowerCase().includes('chromebook') || searchQuery.toLowerCase().includes('computer') || searchQuery.toLowerCase().includes('google') || searchQuery.toLowerCase().includes('mediatek')  || searchQuery.toLowerCase().includes('kirin') || searchQuery.toLowerCase().includes('stuff') || searchQuery.toLowerCase().includes('mate') || searchQuery.toLowerCase().includes('find') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('every') || searchQuery.toLowerCase().includes('banana')) {
    results.push({
        text: 'Tech Reviews',
        link: 'tech.html',
        description: 'The Banana News tech page which includes news, reviews and recommendations about tech.'
    });
} 
if (searchQuery.toLowerCase().includes('politic') || searchQuery.toLowerCase().includes('china') || searchQuery.toLowerCase().includes('ukraine') || searchQuery.toLowerCase().includes('israel') || searchQuery.toLowerCase().includes('taiwan') || searchQuery.toLowerCase().includes('ccp') || searchQuery.toLowerCase().includes('dpp') || searchQuery.toLowerCase().includes('communism') || searchQuery.toLowerCase().includes('democracy') || searchQuery.toLowerCase().includes('stuff') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('russia') || searchQuery.toLowerCase().includes('gaza') || searchQuery.toLowerCase().includes('palestine') || searchQuery.toLowerCase().includes('every') || searchQuery.toLowerCase().includes('banana')) {
    results.push({
        text: 'Politics',
        link: 'politics.html',
        description: "The Banana News politics page includes politics news to keep you informed about what's going on in the political world."
    });
} 
if (searchQuery.toLowerCase().includes('game') || searchQuery.toLowerCase().includes('fun') || searchQuery.toLowerCase().includes('stuff') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('every') || searchQuery.toLowerCase().includes('banana') || searchQuery.toLowerCase().includes('image') || searchQuery.toLowerCase().includes('combiner') || searchQuery.toLowerCase().includes('quad') || searchQuery.toLowerCase().includes('selector') || searchQuery.toLowerCase().includes('share') || searchQuery.toLowerCase().includes('spend') || searchQuery.toLowerCase().includes('money') || searchQuery.toLowerCase().includes('elon') || searchQuery.toLowerCase().includes('musk')){
    results.push({
        text: 'Fun',
        link: 'games.html',
        description: 'The Banana News fun page includes fun and games including Image Combiner, QuadSelector and Share this page.'
    });
} 
if (searchQuery.toLowerCase().includes('game') || searchQuery.toLowerCase().includes('fun') || searchQuery.toLowerCase().includes('image') || searchQuery.toLowerCase().includes('combiner') || searchQuery.toLowerCase().includes('stuff') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('every') || searchQuery.toLowerCase().includes('banana')) {
    results.push({
        text: 'Image Combiner',
        link: 'imagecombiner.html',
        description: 'An image combining game which lets you combine images of famous people with images of food.'
    });
} 
if (searchQuery.toLowerCase().includes('game') || searchQuery.toLowerCase().includes('fun')||searchQuery.toLowerCase().includes('share') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('stuff') || searchQuery.toLowerCase().includes('every') || searchQuery.toLowerCase().includes('banana')) {
    results.push({
        text: 'Share this page',
        link: 'share_this_page.html',
        description: 'A page where you share the page with many different methods of sharing.'
    });
} 
if (searchQuery.toLowerCase().includes('game') || searchQuery.toLowerCase().includes('fun') || searchQuery.toLowerCase().includes('quad') || searchQuery.toLowerCase().includes('selector') || searchQuery.toLowerCase().includes('stuff') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('every') || searchQuery.toLowerCase().includes('banana')) {
    results.push({
        text: 'QuadSelector',
        link: 'https://albertkemp.github.io/quadselector/',
        description: 'A timed game where you have to select as many quadrilaterals as possible.'
    });
}
if (searchQuery.toLowerCase().includes('game') || searchQuery.toLowerCase().includes('fun') || searchQuery.toLowerCase().includes('spend') || searchQuery.toLowerCase().includes('elon') || searchQuery.toLowerCase().includes('musk') || searchQuery.toLowerCase().includes('money') || searchQuery.toLowerCase().includes('stuff') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('every') || searchQuery.toLowerCase().includes('banana')) {
    results.push({
        text: "Spend Elon Musk's money",
        link: 'elonmoney.html',
        description: "A game where you spend Elon Musk's money on many expensive items."
    })
}
if (searchQuery.toLowerCase().includes('hi') || searchQuery.toLowerCase().includes('stuff') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('every') || searchQuery.toLowerCase().includes('banana')) {
    results.push({
        text: 'Hi',
        link: 'hi.html',
        description: 'A html page saying "hi"'
    });
}
if (searchQuery.toLowerCase().includes('game') || searchQuery.toLowerCase().includes('fun') || searchQuery.toLowerCase().includes('cow') || searchQuery.toLowerCase().includes('cattle') || searchQuery.toLowerCase().includes('calc') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('every') || searchQuery.toLowerCase().includes('banana') || searchQuery.includes('stuff')) {
    results.push({
        text: 'Calculator',
        link: 'cow.html',
        description: 'A JavaScript calculator made by Sinan which supports division, multiplication, addition and subtraction.'
    });
}
if (searchQuery.toLowerCase().includes('game') || searchQuery.toLowerCase().includes('fun') || searchQuery.toLowerCase().includes('square') || searchQuery.toLowerCase().includes('shoot') || searchQuery.toLowerCase().includes('stuff') || searchQuery.toLowerCase().includes('all') || searchQuery.toLowerCase().includes('page') || searchQuery.toLowerCase().includes('every') || searchQuery.toLowerCase().includes('banana') || searchQuery.includes('stuff')) {
    results.push({
        text:'Square shooter',
        link:'Me.html',
        description: 'A game with a goal of shooting 100 times in 20 seconds.'
    });
}
if (searchQuery.toLowerCase().includes('askew') || searchQuery.toLowerCase().includes('tilt') || searchQuery.toLowerCase().includes('rotate')) {
    tiltPage();
}
if (results.length > 0) {
    if (results.length==1) {
        var link  =document.createElement('a');
        link.textContent = result.text;
        link.href=result.link;
        var paragraph = document.createElement('p');
        paragraph.innerHTML = result.description;
        searchResultsDiv.appendChild(link);
        searchResultsDiv.appendChild(paragraph);
        document.getElementById('loadingMessage').style.display="none";
    } else{
        results.forEach(result => {
        
            var link = document.createElement('a');
            link.textContent = result.text;
            link.href = result.link;
    
            var paragraph = document.createElement('p');
            paragraph.innerHTML = result.description;
    
            var hr  = document.createElement('hr');
    
            searchResultsDiv.appendChild(link);
            searchResultsDiv.appendChild(paragraph);
            searchResultsDiv.appendChild(hr);
            document.getElementById('loadingMessage').style.display = "none";
        });
        
    }
    
} else {
    var noresults = document.createElement('p');
    noresults.innerHTML = 'No results found.';
    searchResultsDiv.appendChild(noresults);
    header.textContent = '';
    document.getElementById('loadingMessage').style.display = "none";
}


/*else {
    var noresults = document.createElement('p');
    noresults.innerHTML = 'No results found.';
    searchResultsDiv.appendChild(noresults);
    header.textContent='';
}*/