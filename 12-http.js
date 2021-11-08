const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  if (req.url === '/about') {
    res.end('Here is a short descr')
  }
  res.end(`<a href="/">Back</a>`)
})

server.listen(5000)
