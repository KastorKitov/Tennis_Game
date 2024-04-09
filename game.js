var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;

var paddle1Y = 250;
const PADDLE_HEIGHT = 100;

function calculateMousePosition(evt){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;

    return{
        x:mouseX,
        y:mouseY
    }
}

window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecound = 30;
    setInterval(function (){
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecound);

    canvas.addEventListener('mousemove',function (evt){
        var mousePos = calculateMousePosition(evt);
        paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);
    })
}
function moveEverything(){
    //move left and right
    ballX = ballX + ballSpeedX;
    if(ballX >= canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = -ballSpeedX;
    }

    //move up and down
    ballY = ballY + ballSpeedY;
    if(ballY >= canvas.width){
        ballSpeedY = -ballSpeedY;
    }
    if(ballY < 0){
        ballSpeedY = -ballSpeedY;
    }
}
function drawEverything() {

    colorRect(0,0,canvas.width,canvas.height, 'black');
    colorRect(0,paddle1Y,10,PADDLE_HEIGHT,'white');
    colorCircle(ballX, ballY, 10, 'white')
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