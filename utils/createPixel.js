export const createPixel = (x = 0, y = 0, s = 10, imgData, canvasKita) => {
  //   console.log("hi")
  const makePoint = (x, y, imgTemp, r, g, b, a, c) => {
    var index = 4 * (Math.ceil(x) + Math.ceil(y) * c.width)
    imgTemp.data[index] = r
    imgTemp.data[index + 1] = g
    imgTemp.data[index + 2] = b
    imgTemp.data[index + 3] = a
  }

  for (let j = 0; j < s; j++) {
    for (let i = 0; i < s; i++) {
      makePoint(i + x, j + y, imgData, 255, 0, 0, 255, canvasKita)
    }
  }
}
