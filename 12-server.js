const { createServer } = require("http")


const server = createServer((req, res) => {
    if (req.url === '/') {
        res.end(`<h1 class="fs-1 d-flex justify-content-center"> I created my own server yay!!.This is my home page</h1> `)

    } else if (req.url === '/about') {
        res.end('This is a brief history about us')
    } else {
        res.end(` <h1> oops! </h1>
        <p> seems like the page you 're looking for cannot be found</p>
                        `)
    }
})

server.listen(5000)