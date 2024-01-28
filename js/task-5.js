function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let color = document.querySelector(".color");
let button = document.querySelector(".change-color");
button.addEventListener("click",function(event) {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor
  color.innerHTML = randomColor
})