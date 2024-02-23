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
document.body.appendChild(header);

var searchResultsDiv = document.getElementById("searchResults");

if (searchQuery=='Home' || searchQuery=='home' || searchQuery.includes('home') || searchQuery.includes('home')) {
    var link = document.createElement('a');
    link.textContent = 'Home';
    link.href='index.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'The Banana News homepage, including an introduction to Banana News and links to our different pages.';
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
} else if (searchQuery=='News' || searchQuery=='news' || searchQuery.includes('news') || searchQuery.includes('News')) {
    var link = document.createElement('a');
    link.textContent = 'News';
    link.href='index.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'The Banana News news page, including news about tech and politics.';
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
} else if (searchQuery.includes('tech') || searchQuery.includes('Tech') || searchQuery.includes('reviews') || searchQuery.includes('Reviews')) {
    var link = document.createElement('a');
    link.textContent = 'Tech Reviews';
    link.href='index.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'The Banana News tech page which includes tech reviews and news.';
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
} else if (searchQuery.includes('Politics') || searchQuery.includes('politics')) {
    var link = document.createElement('a');
    link.textContent = 'Politics';
    link.href='politics.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = "The Banana News politics page includes politics news to update you on what's going on in the political world.";
    searchResultsDiv.appendChild(link);
    searchResultsDiv.appendChild(paragraph);
} else if (searchQuery.includes('games') || searchQuery.includes('Games') || searchQuery.includes('game') || searchQuery.includes('Game') || searchQuery.includes('Fun') || searchQuery.includes('fun')){
    var link = document.createElement('a');
    link.textContent = 'Fun';
    link.href='games.html';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = "The Banana News fun page includes fun and games including Image Combiner, QuadSelector and Share this page.";
}else {
    var results = document.getElementById("results");
    searchResults.innerHTML = "No results found.";
}