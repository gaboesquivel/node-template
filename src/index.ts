import * as http from 'http'

const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = Number(process.env.PORT || 3000)

const server = http.createServer((_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
