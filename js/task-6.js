function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let input = document.querySelector("#controls input")
let createBtn = document.querySelector("#controls [data-create]")
let destroyBtn = document.querySelector("#controls [data-destroy]")
let boxes = document.querySelector("#boxes")

function createBoxes (amount) {
  if (amount < 1 || amount > 100) return
  destroyBoxes()
  let elements = []
  let size = 30

  for (let i = 0; i < amount; i++) {

    const element = document.createElement("div");
    element.style.width = size + "px"
    element.style.height = size + "px"
    element.style.backgroundColor = getRandomHexColor()
    size += 10
    elements.push(element)
  }
  
  boxes.append(...elements)
}


function destroyBoxes () {
  boxes.innerHTML = ""
}


createBtn.addEventListener("click", function () {
  createBoxes(Math.floor(+input.value))
  input.value = ""
})

destroyBtn.addEventListener("click", function () {
  destroyBoxes()
  input.value = ""
})