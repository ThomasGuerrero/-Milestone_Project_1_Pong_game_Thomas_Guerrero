//creating the base background for the game
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d')

//creating our rectangle function
function drawRect(x, y, w, h, color){
ctx.fillStyle = color;
ctx.fillRect(x, y, w, h);
};
//creating our user and bot
const user = {
    x: 15,
    y: canvas.height/2.5,
    width: 25,
    height: 130,
    color: 'white',
    score: 0,
};

const bot = {
    x: canvas.width/1.04,
    y: canvas.height/2.5,
    width: 25,
    height: 130,
    color: 'white',
    score: 0,
};

//this will be the user rectangle
drawRect(user.x, user.y, user.width, user.height, user.color);
//this will be the bot rectangle
drawRect(bot.x, bot.y, bot.width, bot.height, bot.color);

//creating our ball
const pongBall = document.getElementById('pongBall')

function drawCircle(x, y, r, color){
    ctx.fillStyle = color,
    ctx.beginPath(),
    ctx.arc(x, y, r, 0, Math.PI*2, false),
    ctx.closePath(),
    ctx.fill();
}

const ball = {
    x: 500,
    y: 380,
    radius: 15,
    color: 'white',
    draw() {
        ctx.beginPath(),
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true),
        ctx.closePath();
        ctx.fillStyle = this.color,
        ctx.fill()
    },
};

ball.draw()

// drawing the scoreboard
function drawText(text, x, y, color){
    ctx.fillStyle = color,
    ctx.font = '50px sans serif',
    ctx.fillText(text, x, y)
}



// //creating the pong net
// const net = {
//     x: 200,
//     y: 0,
//     width: 2,
//     height: 10,
//     color: 'white'
// }

// function drawNet() {
//     for (let i = 0; i <= canvas.height; i +=15){
//         drawRect(net.x, net.y + i, net.width, net.height. net.color);
//     }
// };

// // drawNet()

// //drawing the score board
function drawText(text,x,y, color){
    ctx.fillStyle = color;
    ctx.font = "90px Source Sans Pro";
    ctx.fillText(text, x, y);
}

drawText(user.score, 300, 120, 'white');
drawText(bot.score, 650, 120, 'white');
