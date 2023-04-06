//creating the base background for the game
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d')

//creating our rectangles
function drawRect(x, y, w, h, color){
ctx.fillStyle = color;
ctx.fillRect(x, y, w, h);
}

//creating our ball
const pongBall = document.getElementById('pongBall')

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

//creating our user and bot
const user = {
    x: 15,
    y: canvas.height/2.5,
    width: 25,
    height: 130,
    color: 'white',
};

const bot = {
    x: canvas.width/1.04,
    y: canvas.height/2.5,
    width: 25,
    height: 130,
    color: 'white',
};

//this will be the user rectangle
drawRect(user.x, user.y, user.width, user.height, user.color);
//this will be the bot rectangle
drawRect(bot.x, bot.y, bot.width, bot.height, bot.color);

//creating the pong net
const net = {
    x: 200,
    y: 0,
    width: 2,
    height: 10,
    color: 'white'
}

function drawNet() {
    for (let i = 0; i <= canvas.height; i +=15){
        drawRect(net.x, net.y + i, net.width, net.height. net.color);
    }
};


//drawing the score board

