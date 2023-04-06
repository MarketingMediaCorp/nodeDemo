const { readFileSync } = require("fs")
const file = require("fs")

console.log("about to read  to the first file....") // proving sychronous approach

const first = readFileSync("./content/first.txt", "utf-8")

console.log("about to read  to the second file....") // proving sychronous approach

const second = readFileSync("./content/second.txt", "utf-8")

console.log("about to write to file") // proving sychronous approach

file.writeFileSync("./content/results-sync.txt", `Here is the result ${first} ${second} for the second time`, { flag: 'a' })
console.log("finish writing to file") // proving sychronous approach