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
            //gridCell.setAttribute("onmouseover", "changeBackground()")
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

// const gridDiv = document.querySelector(".grid");
// gridDiv.addEventListener(
//     "mouseover",
//     (event) => {
//         event.target.style.color = "grey";
//     }
// )

const grid = document.querySelector(".grid");
grid.addEventListener('mouseover', (event) => {
    let target = event.target;
    target.style.backgroundColor = "grey";
    event.stopPropagation();
})