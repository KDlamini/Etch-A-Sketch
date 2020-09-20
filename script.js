const container = document.querySelector('#container');
const startBtn = document.querySelector('#startGrid');
const clearBtn = document.querySelector('#clearGrid');

function fillGrid(inputValue) {
    let squareHeight  = container.clientHeight/inputValue + "px";
    let gridSize = inputValue ** 2;

    for (let i = 0; i < gridSize; i++){
        let square = document.createElement('div');
        square.className = 'square';
        square.style.height = squareHeight;
        square.style.margin = "0";
        square.style.border =  "1px solid darkgrey";
        square.addEventListener('mouseenter', changeColor);
        container.appendChild(square);  
    }
}

function startGrid() {
    let input = prompt("Enter a number between 1 and 64 to fill grid");

    if(input < 1 || input > 64 || isNaN(input)) {
        do {
            alert("Please type a number between 1 and 64!")
            input = prompt("Enter a number between 1 and 64 to fill grid");
         } 
         while (input < 1 || input > 64 || isNaN(input)); 
    }

    container.style.gridTemplateColumns = "repeat("+input+", 1fr)";
    fillGrid(input);
}

function clearGrid() {
    const grid = document.querySelectorAll('.square').forEach((square) => {
        square.remove();
    })
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color =  "rgb("+r+","+g+","+b+")";

    return color;
}

function changeColor() {
    if (event.target.style.background == "") {
        event.target.style.background = randomColor();
    }
}

startBtn.addEventListener("click", startGrid);
clearBtn.addEventListener("click", clearGrid);