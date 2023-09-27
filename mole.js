let currMoleTile;
let currCocoTile;
let score = 0; 
let gameOver = false; 

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i =0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);

    }

    setInterval(setMole, 600);
    setInterval(setCoco, 800);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString(); 
}

function setMole() {
    if (gameOver) {
        return; 
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./Subject.png";

    let num = getRandomTile();

    if (currCocoTile && currCocoTile.id == num) {
        return; 
    }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setCoco() {
    if (gameOver) {
        return; 
    }
    if (currCocoTile) {
        currCocoTile.innerHTML = "";
    }

    let coco = document.createElement("img");
    coco.src = "./coco.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return; 
    }
    currCocoTile = document.getElementById(num);
    currCocoTile.appendChild(coco);
}

function selectTile() {
    if (gameOver) {
        return; 
    }
    
    if (this == currMoleTile) {
        score += 1; 
        document.getElementById("score").innerText = score.toString(); 
    }
    else if (this == currCocoTile) {
        document.getElementById("score").innerText = "GAME OVER:  " + score.toString();
        gameOver = true; 
    }
}

