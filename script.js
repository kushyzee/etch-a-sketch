const rowNumber = document.querySelector("#number");
const columnNumber = document.querySelector("#column-number");
const enterBtn = document.querySelector("button");
const gridContainer = document.querySelector(".container");

function setRowAndCol() {
  rowNumber.value = 16;
  columnNumber.textContent = rowNumber.value;
}

function formatInput() {
  rowNumber.value = Math.floor(rowNumber.value);
  columnNumber.textContent = rowNumber.value;
}

function removePreviousGrid() {
  if (rowNumber.value < 1) {
    alert("Please enter a number between 1 and 100");
    setRowAndCol();
    return;
  }

  Array.from(gridContainer.children).forEach((box) => box.remove());
  columnNumber.textContent = rowNumber.value;
  createGrid();
}

function changeBoxColor(e) {
  const colors = ['red', 'green', 'blue', 'purple', 'orange', 'lime', 'brown', 'cyan', 'darkblue', 'pink', 'skyblue', 'yellow']

  let randomColor = Math.round(Math.random() * 11)
  let boxColor = e.target
  if (!boxColor.style.backgroundColor) {
    boxColor.style.backgroundColor = colors[randomColor]
  }
}

function createGrid() {
  let row = parseInt(rowNumber.value);
  let rowAndColumn = row * row;
  let flexBasis = (800 - 16) / row;
  for (let i = 0; i < rowAndColumn; i++) {
    let newBox = document.createElement("div");
    newBox.style.cssText = `flex-basis: ${flexBasis}px`;
    gridContainer.appendChild(newBox);
    newBox.addEventListener("mouseover", changeBoxColor);
  }
}

setRowAndCol();
createGrid();

enterBtn.addEventListener("click", removePreviousGrid);
rowNumber.addEventListener("input", formatInput);
