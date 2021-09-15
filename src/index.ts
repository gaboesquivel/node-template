import * as http from 'http'
import { config } from './config'
import { log } from './utils/logger'

const server = http.createServer((_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(config.port, config.hostname, () => log.info(`Server running at http://${config.hostname}:${config.port}/`))
