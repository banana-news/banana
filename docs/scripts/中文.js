
  const techdiv = document.getElementById('tech');
  const politicsdiv = document.getElementById('politics');
  const newsdiv = document.getElementById('news');
  newsdiv.addEventListener("click", function(){
      window.location.href = '中文3.html';
  });
  techdiv.addEventListener("click", function(){
      window.location.href = '中文4.html';
  });
  politicsdiv.addEventListener("click", function(){
      window.location.href= '中文5.html';
  });
const tomatoNewsDiv = document.getElementById('tomatonews');
  function closeItem() {
    tomatoNewsDiv.style.display='none';
  }