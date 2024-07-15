function createGrid () {
    let i = 0;
    const gridDiv = document.querySelector(".grid");

    while (i < 16) {
        let j = 0;
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        while (j < 16) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            //gridCell.setAttribute("onmouseover", "changeBackground()")
            gridRow.appendChild(gridCell);
            j++;
        }

        gridDiv.appendChild(gridRow);
        i++;
    }
}

function createUserGrid(squares) {
    let i = 0;
    const gridDiv = document.querySelector(".grid");
    gridDiv.innerHTML = "";

    while (i < squares) {
        let j = 0;
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        while (j < squares) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridRow.appendChild(gridCell);
            j++;
        }

        gridDiv.appendChild(gridRow);
        i++;
    }
}

createGrid();

const gridButton = document.querySelector("#create-grid");
gridButton.addEventListener("click", () => {createUserGrid(document.querySelector("#grid-slider").value)});

const grid = document.querySelector(".grid");
grid.addEventListener('mouseover', (event) => {
    let target = event.target;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    event.stopPropagation();
})

const clearGridButton = document.querySelector("#clear-grid");
clearGridButton.addEventListener('click', () => {clearGrid()});

function clearGrid() {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((gridCell, key) => {
        gridCell.style.backgroundColor = "white";
    })
}