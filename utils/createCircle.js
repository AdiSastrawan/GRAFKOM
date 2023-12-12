import { createPixel } from "./createPixel.js"

export const circleLine = (x = 140, y = 140, r = 7, imgData, canvas) => {
  let x1 = 0
  let y1 = r

  let point = Number.isInteger(r) ? 1 - r : 5 / 4 - r
  while (x1 <= y1) {
    if (point < 0) {
      x1++
      createPixel(x1 + x, y1 + y, 3, imgData, canvas)
      point = point + 2 * x1 + 1
      createPixel(y1 + x, x1 + y, 3, imgData, canvas)
      createPixel(-y1 + x, x1 + y, 3, imgData, canvas)
      createPixel(y1 + x, -x1 + y, 3, imgData, canvas)
      createPixel(-x1 + x, y1 + y, 3, imgData, canvas)
      createPixel(x1 + x, -y1 + y, 3, imgData, canvas)
      createPixel(-x1 + x, -y1 + y, 3, imgData, canvas)
      createPixel(-y1 + x, -x1 + y, 3, imgData, canvas)
    } else {
      x1++
      y1--
      point = point + 2 * x1 - 2 * y1 + 1
      createPixel(x1 + x, y1 + y, 3, imgData, canvas)
      createPixel(y1 + x, x1 + y, 3, imgData, canvas)
      createPixel(-y1 + x, x1 + y, 3, imgData, canvas)
      createPixel(y1 + x, -x1 + y, 3, imgData, canvas)
      createPixel(-x1 + x, y1 + y, 3, imgData, canvas)
      createPixel(x1 + x, -y1 + y, 3, imgData, canvas)
      createPixel(-x1 + x, -y1 + y, 3, imgData, canvas)
      createPixel(-y1 + x, -x1 + y, 3, imgData, canvas)
    }
  }
}
