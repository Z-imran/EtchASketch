const container = document.querySelector(".container");
const eraserB = document.querySelector(".erase");
const sizerB = document.querySelector(".sizer");
const colorB = document.querySelector(".color");

let mode = "color";
let mouseDown = false
document.body.onmousedown = () => {
    mouseDown = true;
};

document.body.onmouseup = () => {
    mouseDown = false;
};

eraserB.onclick = () => {
    mode = "eraser"
};

colorB.onclick = () => {
    mode = "color"
};
sizerB.onclick = () => changeSize();




function createGrid(size) {
    const gridSquareSize = 512 / size;

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.style.height = `${gridSquareSize}px`;
        gridSquare.style.width = `${gridSquareSize}px`;

        gridSquare.addEventListener("mousedown", color);
        gridSquare.addEventListener("mouseover", color);
        container.appendChild(gridSquare);
    }

}


function color(e) {
    if (mode === "color" && e.type === "mouseover" && mouseDown) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else if (mode === "eraser" && e.type === "mouseover" && mouseDown) {
        let r = 255;
        let g = 255;
        let b = 255;
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

function changeSize() {
    let size = parseInt(prompt("Input new size"));
    container.innerHTML = "";
    createGrid(size);
}

createGrid(16);