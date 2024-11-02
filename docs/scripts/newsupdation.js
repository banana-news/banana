var compileButton = document.querySelectorAll("#compileButton");
var contentInput = document.querySelectorAll("#contentInput");
var titleInput = document.querySelectorAll("#titleInput");
var contentValue = contentInput.value;
var titleValue = titleInput.value;
var files = "newsDocuments";
var filesNumber = files.Count("newsDocuments");
var documentNumber = filesNumber+1;

compileButton.addEventListener("click", function(){
    var opened = window.open("newsDocuments/article"+documentNumber);
    opened.document.write('<!DOCTYPE html><html><head><link rel="stylesheet" href="styles/news.css"><title>' + titleValue + ' - Banana News</title></head><body><h1>' + titleValue + '</h1><p>' + contentValue + '</p></body></html>');
});