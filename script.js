const rowNumber = document.querySelector("#number");
const columnNumber = document.querySelector("#column-number");
const enterBtn = document.querySelector("button");
const gridContainer = document.querySelector(".container");

rowNumber.value = 16
columnNumber.textContent = rowNumber.value;

function createGrid() {
  let row = parseInt(rowNumber.value);
  let rowAndColumn = row * row
  let flexBasis = 800 / row - 1
  console.log(flexBasis)
  for (let i = 0; i < rowAndColumn; i++) {
    let newBox = document.createElement('div')
    newBox.style.cssText = `flex-basis: ${flexBasis}px`
    gridContainer.appendChild(newBox)
  }
}

createGrid()