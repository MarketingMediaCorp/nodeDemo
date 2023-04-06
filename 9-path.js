const path = require("path")
const urlPath = path.join("content", "subfolder", "text.txt")
console.log(urlPath)

const absolute = path.resolve(__dirname, urlPath, )
console.log(absolute)