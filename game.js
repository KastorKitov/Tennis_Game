var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 10;
window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecound = 30;
    setInterval(function (){
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecound);
}
function moveEverything(){
    ballX = ballX + ballSpeedX;
    if(ballX >= canvas.width){
        ballSpeedX = -ballSpeedX;
    }

    if(ballX < 0){
        ballSpeedX = -ballSpeedX;
    }
}
function drawEverything() {

    colorRect(0,0,canvas.width,canvas.height, 'black');
    colorRect(0,210,10,100,'white');
    colorCircle(ballX, 150, 10, 'white')
}

function colorRect(leftX, topX, width, height, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topX,width,height);
}

function colorCircle(centerX, centerY, radius, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0,Math.PI*2, true);
    canvasContext.fill();
}