//creating the base background for the game
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d')

// creating our rectangle function
function drawPlayer(x, y, w, h, color){
ctx.fillStyle = color;
ctx.fillRect(x, y, w, h);
};

function drawRect(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
    };

// creating our players
var playerOne = {
    x: 1,
    y: canvas.height/2.5,
    width: 25,
    height: 130,
    color: 'white',
    score: 0,
};

var playerTwo = {
    x: canvas.width - 25,
    y: canvas.height/2.5,
    width: 25,
    height: 130,
    color: 'white',
    score: 0,
};


//allowing our paddles to move with arrow keys
document.addEventListener('keydown', keyUpHandler, false);
document.addEventListener('keyup', keyDownHandler, false);

var upPressed = false;
var downPressed = false;

function keyUpHandler(e) {
    if(e.key == "Down" || e.key == "ArrowDown") {
        upPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        downPressed = true;
    } 
}

function keyDownHandler(e) {
    if(e.key == "Down" || e.key == "ArrowDown") {
        upPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        downPressed = false;
    }
}


//creating our ball
function drawBall() {
    ctx.beginPath(),
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, true),
    ctx.closePath();
    ctx.fillStyle = ball.color,
    ctx.fill()
}

var ball = {
    x: canvas.width/2 + 4,
    y: canvas.height/2 - 5,
    radius: 15,
    color: 'white',
}




//creating the pong net
const net = {
    x: 500,
    y: 0,
    width: 10,
    height: 35,
    color: 'white'
}

    
//drawing the score board
function drawText(text,x,y, color){
    ctx.fillStyle = color;
    ctx.font = "90px Source Sans Pro";
    ctx.fillText(text, x, y);
}

//paddle collision detection
function collision() {
    if (
        ball.x > playerOne.x &&
        ball.x < playerOne.x + playerOne.width &&
        ball.y > playerOne.y &&
        ball.y < playerOne.y + playerOne.height
    ) {
        dx = -dx;
    } 
    if (
        ball.x > playerTwo.x &&
        ball.x < playerTwo.x + playerTwo.width &&
        ball.y > playerTwo.y &&
        ball.y < playerTwo.y + playerTwo.height
    ) {
        dx = -dx;
    }; }




//movement
var dx = 2;
var dy = 2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer(playerOne.x, playerOne.y, playerOne.width, playerOne.height, playerOne.color);
    drawPlayer(playerTwo.x, playerTwo.y, playerTwo.width, playerTwo.height, playerTwo.color);
    drawBall();
    drawText(playerOne.score, 300, 120, 'white');
    drawText(playerTwo.score, 650, 120, 'white');
    collision();

    if(ball.x + dx > canvas.width-ball.radius || ball.x + dx < ball.radius) {
        dx = -dx;
    }
    if(ball.y + dy > canvas.height-ball.radius || ball.y + dy < ball.radius) {
        dy = -dy;
    } 
    // else if(ball.x + dx > canvas.width-ball.radius) {
        // if(ball.y > playerOne.y && ball.y < playerOne.y + playerOne.width) {
        //     dx = -dx;
        // } 
    //     else {
    //         alert("GAME OVER");
    //         document.location.reload();
    //         clearInterval(interval); // Needed for Chrome to end game
    //     }
    // }
    
    if(upPressed) {
        playerOne.y += 3;
        if (playerOne.y + playerOne.height > canvas.height){
            playerOne.y = canvas.height - playerOne.height;
        }
    }
    else if(downPressed) {
        playerOne.y -= 3;
        if (playerOne.y < 0){
            playerOne.y = 0;
        }
    }

    if(upPressed) {
        playerTwo.y += 3;
        if (playerTwo.y + playerTwo.height > canvas.height){
            playerTwo.y = canvas.height - playerTwo.height;
        }
    }
    else if(downPressed) {
        playerTwo.y -= 3;
        if (playerTwo.y < 0){
            playerTwo.y = 0;
        }
    }

    ball.x += dx;
    ball.y += dy;

    for (let i = 0; i <= canvas.height; i+=50){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }

}; 

var interval = setInterval(draw, 10);