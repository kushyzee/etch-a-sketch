const rowNumber = document.querySelector("#number");
const columnNumber = document.querySelector("#column-number");
const enterBtn = document.querySelector("button");
const gridContainer = document.querySelector(".container");

rowNumber.value = 4
columnNumber.textContent = rowNumber.value;

function formatInput () {
  rowNumber.value = Math.floor(rowNumber.value)
  columnNumber.textContent = rowNumber.value
  if(rowNumber.value === 0) console.log('NaN')
}

function removePreviousGrid () {
  Array.from(gridContainer.children).forEach(box => box.remove())
  columnNumber.textContent = rowNumber.value
  createGrid()
}

function createGrid() {
  let row = parseInt(rowNumber.value);
  let rowAndColumn = row * row
  let flexBasis = (800 - 16) / row
  for (let i = 0; i < rowAndColumn; i++) {
    let newBox = document.createElement('div')
    newBox.style.cssText = `flex-basis: ${flexBasis}px`
    gridContainer.appendChild(newBox)
  }
}

createGrid()

enterBtn.addEventListener('click', removePreviousGrid)
rowNumber.addEventListener('input', formatInput)