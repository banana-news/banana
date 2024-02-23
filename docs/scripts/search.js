const searchbar = document.getElementById('searchbar');
    const query = searchbar.value;
    searchbar.addEventListener("click", function(){
    	if (query.includes('home')){
        	window.location.href = 'index.html';
        } else if (query.includes('news')) {
        	window.location.href = 'news.html';
        } else if (query.includes('games') || query.includes('fun') || query.includes('game')) {
        	window.location.href='games.html';
        } else if (query.includes('politics')) {
        	window.location.href='politics.html';
        } else if (query.includes('tech') || query.includes('reviews')){
        	window.location.href='tech.html';
        }
     
    });