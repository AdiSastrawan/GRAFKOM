import { circleLine } from "./utils/createCircle.js"
import { ddaDrawLine } from "./utils/createLine.js"
import { createPixel } from "./utils/createPixel.js"
var canvasKita = document.querySelector("#canvas1")
var ctx = canvasKita.getContext("2d")
var imgData = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height)
let isClicked = false
let isLine = false
let isDraw = false
let drawLine = document.getElementById("line")
let draw = document.getElementById("draw")
let createCircle = document.querySelector("#circle")
let buttonCircle = document.querySelector("#create-circle")
const closeButton = document.querySelector(".close")

//circle
closeButton.addEventListener("click", (e) => {
  document.querySelector(".modal").classList.add("hidden")
})
createCircle.addEventListener("click", (e) => {
  document.querySelector(".modal").classList.remove("hidden")
})
buttonCircle.addEventListener("click", (e) => {
  let circleX = document.querySelector("input#x").value
  let circleY = document.querySelector("input#y").value
  let circleScale = document.querySelector("input#scale").value
  circleLine(parseInt(circleX), parseInt(circleY), parseInt(circleScale), imgData, canvasKita)
  ctx.putImageData(imgData, 0, 0)
  document.querySelector(".modal").classList.add("hidden")
})

//draw a line
let x
let y
canvasKita.addEventListener("click", (e) => {
  if (isLine) {
    if (isClicked) {
      console.log(e)
      ddaDrawLine(x, e.offsetX, y, e.offsetY, imgData, canvasKita)
      isClicked = false
    } else {
      x = e.offsetX
      y = e.offsetY
      createPixel(x, y, 4, imgData, canvasKita)
      isClicked = true
    }
    ctx.putImageData(imgData, 0, 0)
  }
})

drawLine.addEventListener("click", (e) => {
  drawLine.classList.add("active")
  draw.classList.remove("active")
  isLine = true
  isDraw = false
})

//draw freely
draw.addEventListener("click", (e) => {
  isDraw = true
  draw.classList.add("active")
  drawLine.classList.remove("active")
  isLine = false
})
canvasKita.addEventListener("mousedown", (e) => {
  if (isDraw) {
    canvasKita.addEventListener("mousemove", makePixel)
  }
})
function removeHandler() {
  canvasKita.removeEventListener("mousemove", makePixel)
}
const makePixel = (e) => {
  createPixel(e.offsetX, e.offsetY, 4, imgData, canvasKita)
  ctx.putImageData(imgData, 0, 0)
}
canvasKita.addEventListener("mouseup", removeHandler)
ctx.putImageData(imgData, 0, 0)
