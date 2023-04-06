const { readFile, writeFile } = require("fs")


console.log("about to read")
readFile("./content/first.txt", "utf-8", (err, data) => {

    if (err) {
        console.log(err)
        return;
    }
    const first = data
    readFile("./content/second.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = data

        writeFile("./content/result-asynxc.txt", `${first} , ${second}`, (err, data2) => {
            if (err) {
                console.log(`Error : ${err}`)
                return;
            }
            console.log(data2)
        })

    })
})
console.log("finish reading")