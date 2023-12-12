import { createPixel } from "./createPixel.js"

export const ddaDrawLine = (x1, x2, y1, y2, imgData, canvasKita) => {
  let dx = x2 - x1
  let dy = y2 - y1
  let m
  console.log("x1 : " + x1 + ", y1 : " + y1 + ", x2 : " + x2 + ", y2 : " + y2)
  console.log("dx : " + dx + ", dy : " + dy + ",")
  if (Math.abs(dx) > Math.abs(dy)) {
    //moving in x line
    m = dy / Math.abs(dx)
    if (x1 > x2) {
      let y = y1
      for (let i = x1; i > x2; i--) {
        y = y + m
        createPixel(i, y, 4, imgData, canvasKita)
      }
    } else {
      let y = y1
      for (let i = x1; i < x2; i++) {
        y = y + m
        createPixel(i, y, 4, imgData, canvasKita)
      }
    }
  } else {
    //moving in y line
    m = dx / Math.abs(dy)
    if (y1 > y2) {
      let x = x1
      for (let i = y1; i > y2; i--) {
        x = x + m
        createPixel(x, i, 4, imgData, canvasKita)
      }
    } else {
      let x = x1
      for (let i = y1; i < y2; i++) {
        x = x + m
        createPixel(x, i, 4, imgData, canvasKita)
      }
    }
  }
}
