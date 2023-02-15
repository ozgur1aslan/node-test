const http = require('http')

/* const server = http.createServer((req, res) => {
    console.log(req)
    res.write('welcome to home page')
    res.end()
}) */

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('welcome to home page')
    }
    if(req.url === '/about') {
        res.end('welcome to about page')
    }
    res.end(`
        <h1>Opsss</h1>
        <p1>page not found</p1>
        <a href="/">back to home</a>
    `)
})

server.listen(5000)