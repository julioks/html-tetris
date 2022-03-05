console.log('hello!');


var gameGrid = [
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
];
function piece(x,y) {
    this.x=x;
    this.y=y;
}
const pieces = [
    [ new piece(0,5),new piece(0,4),new piece(1,5),new piece(1,4)],
    [new piece(0,5),new piece(0,4),new piece(0,3),new piece(0,6)],
    [new piece(0,5),new piece(1,4),new piece(1,5),new piece(2,4)],
    [new piece(0,4),new piece(1,4),new piece(1,5),new piece(2,5)],
    [new piece(0,5),new piece(1,5),new piece(2,5),new piece(2,4)],
    [new piece(0,5),new piece(1,5),new piece(2,5),new piece(1,4)]
    
]


var activeTetri =JSON.parse(JSON.stringify(pieces[ Math.floor(Math.random() * pieces.length)]));

document.body.onkeydown = function(e){
   keyis(e)
};
function keyis(e){ 
    var rgx = /Arrow\w+/; 
    switch (e.code) {
        case "ArrowDown":
        moveDown(gameGrid,"down");
            break;
            case "ArrowRight":
                moveDown(gameGrid,"right");
                break;
            case "ArrowLeft":
                moveDown(gameGrid,"left");
                break;
            case "ArrowUp":
                moveDown(gameGrid,"down");
                break;
    
        default:
        console.log(e);
       
            break;
    }
    }


 drawTable(gameGrid);
function drawTable(drawWhat) {
    let drawFlag=true;
    for (let i = 0; i < activeTetri.length; i++) {
        const e = activeTetri[i];
        if (drawWhat[e.x][e.y]=="l") {
            document.getElementById("up").innerText="vsio, pizdiec";
            drawFlag=false;
        }
    }
    
    const myNode = document.getElementById("playfield");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  var table = document.createElement('table');

  if(drawFlag){
    for (let i = 0; i < activeTetri.length; i++) {
      const e = activeTetri[i];
      drawWhat[e.x][e.y]="c";
  }
  }
 
  for (var i = 0; i < 20; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 10; j++) {
      var td = document.createElement('td');
      td.dataset.state = drawWhat[i][j];
      //td.innerHTML = i + ':' + j;
      tr.append(td);
    }

    table.append(tr);

  }
  document.getElementById("playfield").append(table);
}

function moveDown(gameArray,direction){
    var addx =0;
    var addy =0;
    switch (direction) {
        case "down":
            addx=1;
            break; 
            case "left":
            addy=-1;
            break; 
            case "right":
            addy=1;
            break;
    
        default:
            break;
    }


    for (let i = 0; i < gameArray.length; i++) {
        const e = gameArray[i];
        for (let j = 0; j < e.length; j++) {
            if (e[j]=="c") {
                e[j]="o";
            }

            
        }
        
    }
    

        let f1=true;
        for (let i = 0; i < activeTetri.length; i++) {
            const e = activeTetri[i];
            
            const ex=e.x;
            const ey=e.y;
            
            try {
                if ( !(0<=ex+addx && ex+addx<gameArray.length) || !(0<=ey+addy &&ey+addy<gameArray[0].length)) {
                    f1=false;
                    const at = activeTetri;
                    gameArray=lockTetri(gameArray,at);
                     activeTetri =JSON.parse(JSON.stringify(pieces[ Math.floor(Math.random() * pieces.length)]));
                    break;
                }else if (gameArray[ex+addx][ey+addy] == "l") {
                    f1=false;
                    const at = activeTetri;
                    gameArray=lockTetri(gameArray,at);
                     activeTetri= JSON.parse(JSON.stringify(pieces[ Math.floor(Math.random() * pieces.length)]));
                    break;

                }
            } catch (error) {
                // f1=false;
                // gameArray=lockTetri(gameArray,activeTetri);
              
                // activeTetri = [new piece(0,5),new piece(0,4),new piece(1,5),new piece(1,4),];

            }
            
        }
        if (f1) {
            for (let i = 0; i < activeTetri.length; i++) {
                if(gameArray[activeTetri[i].x][activeTetri[i].y]){
                    activeTetri[i].x=activeTetri[i].x+addx;
                    activeTetri[i].y=activeTetri[i].y+addy;
                    gameArray[activeTetri[i].x][activeTetri[i].y]="c"
                }
    
    
            }
        }
        
    


  console.log(activeTetri);
    drawTable(gameArray);
    console.log(gameArray);

}
function lockTetri(gameArray,at){
for (let i = 0; i < at.length; i++) {
    console.log(i+":"+at[i].y + at.length)
    gameArray[at[i].x][at[i].y]="l";
}
return gameArray;
}
