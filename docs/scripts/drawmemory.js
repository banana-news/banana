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
//img tags
const googleImg = document.getElementById('google');
const microsoftImg = document.getElementById('microsoft');
const cokeImg = document.getElementById('coke');
const appleImg = document.getElementById('apple');
const facebookImg = document.getElementById('facebook');

//urls
const googleUrl = 'images/google.png';
const microsoftUrl = 'images/microsoft.png';
const cokeUrl = 'images/coke.png';
const appleUrl = 'images/apple.svg';
const facebookUrl = 'images/facebooknew.png';

function revealImage(image, url, button) {
	image.src = url;
	button.style.display ='none';
}

 var canvases = document.getElementsByClassName("drawPlace");
        var colorLine = "#000000";
        var key = {C: 67};

        for (let i = 0; i < canvases.length; i++) {
            let canvas = canvases[i];
            let paper = canvas.getContext("2d");
            let pressedMouse = false;
            let x, y;

            canvas.addEventListener("mousedown", function(event) { startDrawing(event, canvas, paper); });
            canvas.addEventListener("mousemove", function(event) { drawLine(event, canvas, paper); });
            canvas.addEventListener("mouseup", function(event) { stopDrawing(event, canvas); });
        }

        document.addEventListener("keydown", clearCanvas);

        function startDrawing(event, canvas, paper) {
            pressedMouse = true;
            x = event.offsetX;
            y = event.offsetY;
            drawing_line(colorLine, x-1, y, x, y, paper);
        }

        function drawLine(event, canvas, paper) {
            if (pressedMouse) {
                canvas.style.cursor = "crosshair";
                var xM = event.offsetX;
                var yM = event.offsetY;
                drawing_line(colorLine, x, y, xM, yM, paper);
                x = xM;
                y = yM;
            }
        }

        function stopDrawing(event, canvas) {
            pressedMouse = false;
            canvas.style.cursor = "default";
        }

        function clearCanvas(event) {
            if (event.keyCode == key.C) {
                for (let i = 0; i < canvases.length; i++) {
                    let paper = canvases[i].getContext("2d");
                    paper.clearRect(0, 0, canvases[i].width, canvases[i].height);
                }
            }
        }

        function changeColor(newColor) {
            colorLine = newColor;
        }

        function drawing_line(color, x_start, y_start, x_end, y_end, paper) {
            paper.beginPath();
            paper.strokeStyle = color;
            paper.lineWidth = 3;
            paper.moveTo(x_start, y_start);
            paper.lineTo(x_end, y_end);
            paper.stroke();
            paper.closePath();
        }