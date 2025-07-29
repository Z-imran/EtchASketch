const container = document.querySelector(".container");

function createGrid(size) {
    const gridSquareSize = 512 / size;

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.style.height = `${gridSquareSize}px`;
        gridSquare.style.width = `${gridSquareSize}px`;

        gridSquare.addEventListener("mouseover", color);
        container.appendChild(gridSquare);
    }

}


function color(e) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

createGrid(16);