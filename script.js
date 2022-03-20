var gridPreset = [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],  
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  //['l', 'l', 'l', 'o', 'o', 'l', 'l', 'l', 'l', 'l'],
];

function piece(x, y) {
  this.x = x;
  this.y = y;
}

function fullPiece(pieces, x, y, pieceNo, rotNo) {
  this.pieces = pieces;
  this.x = x;
  this.y = y;
  this.pieceNo = pieceNo;
  this.rotNo = rotNo;
}
const availablePieces = [
  new fullPiece(
    [new piece(1,0),
    new piece(1,1),
    new piece(2,1),
    new piece(2,0)],
    0,4,0,0),
new fullPiece(
    [new piece(0,0),
     new piece(0,1),
     new piece(0,2),
     new piece(0,-1)],
    0,4,1,1),
    new fullPiece(
        [new piece(0,0),
         new piece(1,0),
         new piece(2,0),
         new piece(3,0)],
        0,4,1,0),
new fullPiece(
[new piece(1,0),
    new piece(1,1),
    new piece(2,2),
    new piece(2,1)],
    0,4,2,0), new fullPiece(
    [new piece(0,2),
        new piece(1,1),
        new piece(1,2),
        new piece(2,1)],
        0,4,2,1),
new fullPiece(
[new piece(1,0),
    new piece(1,1),
    new piece(1,2),
    new piece(2,2)],
    0,4,3,0),new fullPiece(
    [new piece(1,1),
        new piece(1,2),
        new piece(1,0),
        new piece(0,0)],
        0,4,3,2),
        new fullPiece(
        [new piece(2,0),
            new piece(0,1),
            new piece(1,1),
            new piece(2,1)],
            0,4,3,1),new fullPiece(
            [new piece(0,2),
                new piece(0,1),
                new piece(1,1),
                new piece(2,1)],
                0,4,3,3),
    new fullPiece(
        [new piece(1,0),
            new piece(2,0),
            new piece(1,1),
            new piece(1,2)],
            0,4,4,0),
            new fullPiece(
                [new piece(0,0),
                    new piece(0,1),
                    new piece(1,1),
                    new piece(2,1)],
                    0,4,4,1),
                    new fullPiece(
                        [new piece(1,0),
                            new piece(1,2),
                            new piece(1,1),
                            new piece(0,2)],
                            0,4,4,2),new fullPiece(
                                [new piece(0,1),
                                    new piece(2,1),
                                    new piece(1,1),
                                    new piece(2,2)],
                                    0,4,4,3),
    new fullPiece(
        [new piece(1,1),
            new piece(1,2),
            new piece(2,0),
            new piece(2,1)],
            0,4,5,0),new fullPiece(
                [new piece(0,1),
                    new piece(1,1),
                    new piece(1,2),
                    new piece(2,2)],
                    0,4,5,1),
    new fullPiece(
        [new piece(1,1),
            new piece(1,2),
            new piece(1,0),
            new piece(2,1)],
            0,4,6,0),
            new fullPiece(
                [new piece(0,1),
                    new piece(1,1),
                    new piece(2,1),
                    new piece(1,0)],
                    0,4,6,1),new fullPiece(
                        [new piece(1,1),
                            new piece(1,2),
                            new piece(1,0),
                            new piece(0,1)],
                            0,4,6,2),new fullPiece(
                                [new piece(0,1),
                                    new piece(1,1),
                                    new piece(1,2),
                                    new piece(2,1)],
                                    0,4,6,3),

];
var activePiece;
var linesCleared;
var startedFlag=false;

document.body.onkeydown = function(e){
  keyis(e)
};
function keyis(e){ 
   var rgx = /Arrow\w+/; 
   switch (e.code) {
       case "ArrowDown":
       move(gameGrid, activePiece,"down");
           break;
           case "ArrowRight":
               move(gameGrid, activePiece,"right");
               break;
           case "ArrowLeft":
               move(gameGrid, activePiece,"left");
               break;
           case "ArrowUp":
               rotate(gameGrid,activePiece);
               break;
   
       default:
       console.log(e);
      
           break;
   }
   }

   var gameGrid
   var gameLoop;
//drawGrid(gameGrid);
function startThis(){
  if (!startedFlag) {
    gameGrid=JSON.parse(JSON.stringify(gridPreset));
    activePiece = giveRandomPiece();
    linesCleared=0;
    startedFlag=true;
    drawGrid(gameGrid);
    document.getElementById("start").innerHTML="stop";
    document.getElementById("name").innerHTML="tetris wit a budget"
    gameLoop= setInterval(()=>{move(gameGrid, activePiece,"down")}, 1000);
  }else{
    clearInterval(gameLoop);
    document.getElementById("start").innerHTML="gimmi njuan";
    startedFlag=false;
  }
  
}


function drawGrid(drawable) {
  const myNode = document.getElementById('playfield');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  checkAndClear(drawable);
  try {
    checkGameOver(drawable);
  } catch (error) {
    document.getElementById("name").innerHTML="vsio, prisižaidę"
    document.getElementById("start").innerHTML="reset";
    return;
  }
  
  clearCurrents(drawable);
  addCurrents(drawable, activePiece);
  var finalTable = document.createElement('table');
  for (var i = 2; i < drawable.length; i++) {
    var addRow = document.createElement('tr');
    for (var j = 0; j < drawable[i].length; j++) {
      var addData = document.createElement('td');
      addData.dataset.state = drawable[i][j];
      addRow.append(addData);
    }
    finalTable.append(addRow);
  }
  document.getElementById('playfield').append(finalTable);
  console.log(availablePieces);
}
function checkPlacement(grid, active) {
  console.log(grid);
  for (var i = 0; i < active.pieces.length; i++) {
    try {
      if (
        grid[active.x + active.pieces[i].x][active.y + active.pieces[i].y] ==
          'l' ||
        active.x + active.pieces[i].x >= grid.length 
      ) {
        console.log('soft no');
        return false;
      }
      else if(
        
        active.y + active.pieces[i].y >= grid[0].length|| active.y + active.pieces[i].y < 0
      ){
        return "on wall"
      }
    } catch {
      console.log('hard no');
      return false;
    }
  }
  return true;
}
function clearCurrents(grid) {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 'c') {
        grid[i][j] = 'o';
      }
    }
  }
  return grid;
}
function addCurrents(grid, active) {
  if (checkPlacement(grid, active)) {
    for (var i = 0; i < active.pieces.length; i++) {
      grid[active.x + active.pieces[i].x][active.y + active.pieces[i].y] = 'c';
    }
  }
  return grid;
}
function move(grid, active, direction) {
  var addx = 0;
  var addy = 0;
  switch (direction) {
    case 'down':
      addx = 1;
      break;
    case 'left':
      addy = -1;
      break;
    case 'right':
      addy = 1;
      break;
    default:
  }
  var testActive = JSON.parse(JSON.stringify(active));
  testActive.x = testActive.x + addx;
  testActive.y = testActive.y + addy;
  grid = clearCurrents(grid);
  if (checkPlacement(grid, testActive)==1) {
    activePiece = testActive;
    
  } else if(!checkPlacement(grid, testActive)&&direction=="down"){
    grid=lock(grid,activePiece);
    activePiece = giveRandomPiece() ;
  }
  drawGrid(grid);
  gameGrid=grid;
}
function lock(grid, piece){
  var lockedGrid= JSON.parse(JSON.stringify(grid));
  for (let i = 0; i < piece.pieces.length; i++) {
    lockedGrid[piece.pieces[i].x+piece.x][piece.pieces[i].y+piece.y]="l";
  }
  return lockedGrid;
}
function giveRandomPiece(){
  var notrotatedpieces = JSON.parse(JSON.stringify(
    availablePieces.filter(norotpiece=>norotpiece.rotNo==0)
  ));
  return notrotatedpieces[ Math.floor(Math.random() * notrotatedpieces.length)]
}
function checkAndClear(grid){
  for (let i = 0; i < grid.length; i++) {
    var clearFlag=true;
    for (let j = 0; j < grid[i].length; j++) {
     if (grid[i][j]!="l") {
       clearFlag=false;
     }
    }
    if (clearFlag) {
      linesCleared++;
      document.getElementById("linesCleared").innerHTML="Lines cleared: "+linesCleared;
      for (let k = i; k >= 0; k--) {
        if (k-1>=0) {
          grid[k]=JSON.parse(JSON.stringify(grid[k-1]))
        }
        else{
          grid[k]=['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'];
        }
      }
    }
  }
}
function rotate(grid, active){
  var nextoneref = availablePieces.filter(element => ((element.pieceNo == active.pieceNo)&&(element.rotNo==active.rotNo+1)));
  if(nextoneref.length==0)
    {
      nextoneref =  availablePieces.filter(element => ((element.pieceNo == active.pieceNo)&&(element.rotNo==0)));
    }
    var nextone= JSON.parse(JSON.stringify(nextoneref[0]));
    nextone.x=active.x;
    nextone.y=active.y;
    if(checkPlacement(grid,nextone)==true){
      activePiece=nextone;
    }
    drawGrid(grid);
}
function checkGameOver(grid){
  for (let i = 0; i < grid[1].length; i++) {
    if (grid[1][i]=="l") {
      throw new error();
    }
    
  }
}