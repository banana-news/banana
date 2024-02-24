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


var queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
var searchQuery = searchParams.get("q");

document.title = searchQuery + " - Search Results";

var header = document.getElementById("header");
header.textContent = "Search Results for \"" + searchQuery + "\"";
//document.body.appendChild(header);

var searchResultsDiv = document.getElementById("searchResults");

if (searchQuery.toLowerCase().includes('home') || searchQuery.toLowerCase().includes('index') || searchQuery.toLowerCase().includes('main') || searchQuery.toLowerCase().includes('banana')) {
    var link = document.createElement('a');
    link.textContent = 'Home';
    link.href='index.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'The Banana News homepage, including an introduction to Banana News and links to our different pages.';
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
} else if (searchQuery.toLowerCase().includes('news') || searchQuery.toLowerCase().includes('tomato') || searchQuery.toLowerCase().includes('kirin')) {
    var link = document.createElement('a');
    link.textContent = 'News';
    link.href='news.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'The Banana News news page, including news about tech and politics.';
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
} else if (searchQuery.toLowerCase().includes('tech') || searchQuery.toLowerCase().includes('review') || searchQuery.toLowerCase().includes('phone') || searchQuery.toLowerCase().includes('tablet') || searchQuery.toLowerCase().includes('mobile') || searchQuery.toLowerCase().includes('ipad') || searchQuery.toLowerCase().includes('mac') || searchQuery.toLowerCase().includes('laptop') || searchQuery.toLowerCase().includes('apple') || searchQuery.toLowerCase().includes('huawei')|| searchQuery.toLowerCase().includes('lenovo') || searchQuery.toLowerCase().includes('dell') || searchQuery.toLowerCase().includes('hp') || searchQuery.toLowerCase().includes('oppo') || searchQuery.toLowerCase().includes('vivo') || searchQuery.toLowerCase().includes('iqoo') || searchQuery.toLowerCase().includes('oneplus') || searchQuery.toLowerCase().includes('1+') || searchQuery.toLowerCase().includes('realme') || searchQuery.toLowerCase().includes('samsung') || searchQuery.toLowerCase().includes('android') || searchQuery.toLowerCase().includes('pc') || searchQuery.toLowerCase().includes('device') || searchQuery.toLowerCase().includes('snapdragon') || searchQuery.toLowerCase().includes('chromebook') || searchQuery.toLowerCase().includes('computer') || searchQuery.toLowerCase().includes('google') || searchQuery.toLowerCase().includes('mediatek')  || searchQuery.toLowerCase().includes('kirin')) {
    var link = document.createElement('a');
    link.textContent = 'Tech Reviews';
    link.href='tech.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'The Banana News tech page which includes tech reviews and news.';
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
} else if (searchQuery.toLowerCase().includes('politic') || searchQuery.toLowerCase().includes('china') || searchQuery.toLowerCase().includes('ukraine') || searchQuery.toLowerCase().includes('israel') || searchQuery.toLowerCase().includes('taiwan') || searchQuery.toLowerCase().includes('ccp') || searchQuery.toLowerCase().includes('dpp') || searchQuery.toLowerCase().includes('communism') || searchQuery.toLowerCase().includes('democracy')) {
    var link = document.createElement('a');
    link.textContent = 'Politics';
    link.href='politics.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = "The Banana News politics page includes politics news to update you on what's going on in the political world.";
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
} else if (searchQuery.toLowerCase().includes('game') || searchQuery.toLowerCase().includes('fun')){
    var link = document.createElement('a');
    link.textContent = 'Fun';
    link.href='games.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = "The Banana News fun page includes fun and games including Image Combiner, QuadSelector and Share this page.";
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
} else if (searchQuery.toLowerCase().includes('image') || searchQuery.toLowerCase().includes('combiner')) {
    var link = document.createElement('a');
    link.textContent = 'Image Combiner';
    link.href='imagecombiner.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = "An image combining game which lets you combine images of famous people with images of food";
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
} else if (searchQuery.toLowerCase().includes('share')) {
    var link = document.createElement('a');
    link.textContent = 'Share this page';
    link.href='share_this_page.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = "A page where you share the page with many different methods of sharing";
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
} else if (searchQuery.toLowerCase().includes('quad') || searchQuery.toLowerCase().includes('selector')) {
    var link = document.createElement('a');
    link.textContent = 'QuadSelector';
    link.href='https://albertkemp.github.io/quadselector';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = "A timed game where you have to select as many quadrilaterals as possible.";
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
}

else {
    var noresults = document.createElement('p');
    noresults.innerHTML = 'No results found.';
    searchResultsDiv.appendChild(noresults);
    header.textContent='';
}