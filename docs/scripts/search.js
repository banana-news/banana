var searchbar = document.getElementById('searchbar');
searchbar.addEventListener("keypress", function(event){
    if (event.key =='Enter') {
        search();
    }
});
function search() {
    var searchbar = document.getElementById("searchbar").value;
    if (searchbar == "") {
        alert("Please enter a search term");
    } else {
        window.location.href = "searchresults.html?q=" + encodeURIComponent(searchbar);
    }
}