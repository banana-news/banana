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
 var square = document.getElementById("drawPlace");
 var paper = square.getContext("2d");
 var pressedMouse = false; 
 var x;
 var y;
 var colorLine ="#9ACD32";
 var key = {C: 67};
 
 document.addEventListener("mousedown", startDrawing);
 document.addEventListener("mousemove", drawLine);
 document.addEventListener("mouseup", stopDrawing);
 document.addEventListener("keydown", clearCanvas);
 
 function startDrawing(eventvs01){
	 pressedMouse = true;
	 x = eventvs01.offsetX;
	 y = eventvs01.offsetY;
 }
 
 function drawLine(eventvs02) {
	 if (pressedMouse) {
		 document.getElementById("drawPlace").style.cursor = "crosshair";
		 var xM = eventvs02.offsetX;
		 var yM = eventvs02.offsetY;
		 drawing_line(colorLine, x, y, xM, yM, paper);
		 x = xM;
		 y = yM;
	 }
 }
 
 function stopDrawing(eventvs03) {
	 pressedMouse = false;
	 document.getElementById("drawPlace").style.cursor = "default";
 }
 
 function clearCanvas(whenPressKey) {
	 if (whenPressKey.keyCode == key.C) {
		 paper.clearRect(0, 0, square.width, square.height);
	 }
 }
 
 drawing_line("#FF6347", x-1, y, x, y, paper);
 function changeColor(newColor){
	 colorLine = newColor;
 }
 function drawing_line(color, x_start, y_start, x_end, y_end, board){
	 board.beginPath();
	 board.strokeStyle = color;
	 board.lineWidth = 2;
	 board.moveTo(x_start,y_start);
	 board.lineTo(x_end,y_end);
	 board.stroke(); 
	 board.closePath();
 }