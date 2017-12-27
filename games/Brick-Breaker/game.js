var canvas;
var context;
const PADDLE_WIDTH = 100;
var paddleX = 350;
var ballX = 400;
var ballY = 575;
var ballSpeedX = 0;
var ballSpeedY = 5;
var gameStart = 1;
const balanceWidth = 40;
const balanceHeight = 10;
const balanceHeightDiff = 50;
var balance = [];
//const balanceInit = [];
var collision = false;
var diffX;
var colIndex;
var isWin = false;
const LIVES = 3;
var life = 0;
var isLoss = false;

window.onload = function(){
  canvas = document.getElementById('game');
  context = canvas.getContext('2d');
  callEverything();
  canvas.addEventListener('mousemove',function(evt){
    var mousePos = calMousePos(evt);
    //console.log(mousePos.x);
    paddleX = mousePos.x - (PADDLE_WIDTH/2);
  });
  canvas.addEventListener('mousedown',function(){
    if (life<3 && gameStart)
    {
    gameStart = 0;
    ballSpeedY = 5;
  }
    if(life==3){
      //isLoss = false;
      //life=0;
      location.reload();
    }
    if (isWin){
      isWin = false;
      location.reload();
    }
  });
  //console.log(balance);
  //storeCor();
  setInterval(callEverything,1000/30);
  //drawBalance();
  storeCor();
}

function callEverything(){
  draw();
  move();
}

function calMousePos(evt){
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x:mouseX,
    y:mouseY
  };
}

function draw(){
  context.fillStyle = 'black';
  context.fillRect(0,0,canvas.width,canvas.height);
  if (isLoss){
    showLossScreen();
    return;
  }
  if(isWin){
    showWinScreen();
    return;
  }
  context.fillStyle = 'white';
  context.fillRect(paddleX,canvas.height-15,PADDLE_WIDTH,10 );
  context.beginPath();
  context.arc(ballX,ballY,10,0,Math.PI*2,true);
  context.fill();
  drawBalance();
}

function drawBalance(){
  for (var i=0;i<balance.length;i++){
    var drawX = balance[i].x;
    var drawY = balance[i].y;
    context.fillStyle = 'white';
    context.fillRect(drawX,drawY,balanceWidth,balanceHeight);
  }
}

function showWinScreen(){
  context.fillStyle = 'white';
  context.fillText('YOU WIN',350,100);
  context.fillText('click to continue',350,500);
}

function move(){
  //if(gameStart){
    //ballX = paddleX + PADDLE_WIDTH/2;
    //console.log(ballX);
  //}

  if(gameStart){
    newStart();
    return;
  }
  win();
  //calBallSpeedX();
  ifCollision();
  if (collision){
    ballSpeedY = -ballSpeedY;
    ballSpeedX = diffX * 0.5;
    //coordinateX = balance[colIndex].x;
    //coordinateY = balance[colIndex].y;
    //context.fillStyle = 'black';
    //context.fillRect(coordinateX,coordinateY,balanceWidth,balanceHeight);
    collision = false;
  }
  ballX = ballX + ballSpeedX;
  ballY = ballY - ballSpeedY;
  //console.log(ballY);
  if (ballX > canvas.width-10)
  ballSpeedX = -ballSpeedX;
  if (ballX <  10)
  ballSpeedX = -ballSpeedX;
  if (ballY > canvas.height-25)
  {
    if(ballX > paddleX && ballX < paddleX + PADDLE_WIDTH)
    {
      ballSpeedY = -ballSpeedY;
      calBallSpeedX();
    }
    else {
      newStart();
      life++;
      if(life==LIVES){
        //life=0;
      isLoss = true;}
    }
  }
  if (ballY <  10)
  ballSpeedY = -ballSpeedY;

}

function showLossScreen(){
  context.fillStyle = 'white';
  context.fillText('You Loose!!! GAME OVER',350,100);
  context.fillText('Click to continue',350,500);
  //balance = balanceInit;
  //storeCor();
  //console.log('I am loss screen');
}

function win(){
  if (balance.length == 0){
    isWin = true;
  }
}

function calBallSpeedX(){
  var diff = ballX - (paddleX + PADDLE_WIDTH/2);
  ballSpeedX = diff*0.35;
}

function newStart(){
  ballX = paddleX + PADDLE_WIDTH/2;
  ballY = canvas.height - 25;
  ballSpeedY = 0;
  ballSpeedX = 0;
  gameStart = 1;
}

/*function drawBalance(){
  for (var i=20;i<=canvas.width-30;i+=80){
    //balance[i] = [];
    for (var j=50;j<=200;j+=balanceHeightDiff)
    {
      context.fillStyle = 'white';
      context.fillRect(i,j,balanceWidth,balanceHeight);
      //balance[i][j] = j;
      //console.log(balance[[0]]);
      //storeBalance(i,j,balance);
    }
  }
}*/

function storeCor(){
  for (var i=20;i<=canvas.width-30;i+=80){
    for (var j=50;j<=200;j+=balanceHeightDiff){
      storeBalance(i,j,balance);
      //storeBalance(i,j,balanceInit);
    }
  }
  //console.log(balanceInit);
}

function storeBalance(xV,yV,array){
  array.push({x:xV,y:yV});
}

function ifCollision(){
  var corX = ballX;
  var corY = ballY;
  balance.forEach(function(item){
    if (corX > item.x-10 && corX < item.x+balanceWidth+10 ){     // 10 is the radius of the ball
      if (corY > item.y && corY < item.y+balanceHeight){
        collision = true;
        diffX = corX - (item.x+balanceWidth/2);
        colIndex = findIndexCol(item.x,item.y,balance);
        balance.splice(colIndex,1);
        //console.log(balance);
        //console.log(balanceInit);
        //colIndex1 = findIndexCol(item.x,item.y,balanceCol);
        //console.log(colIndex);
      }
    }
  });
}

function findIndexCol(corx,cory,array){
  var index1 = array.findIndex(i=> i.x==corx);
  //var index2 = array.findIndex(j=> j.y==cory);
  for (var l = index1; l<balance.length && balance[index1].x == corx;l++){
    if (balance[l].y == cory)
    return index1;
    index1++;
  }
  //return index1;
}
