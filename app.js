//creating the base background for the game
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d')

//creating our rectangles
function drawRect(x, y, w, h, color){
ctx.fillStyle = color;
ctx.fillRect(x, y, w, h);
}

// drawRect(10, 300, 25, 130, 'white')
// drawRect(900, 300, 25, 130, 'white')

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

