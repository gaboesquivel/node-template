import * as http from 'http'
import { config } from './config'
import { log } from './library/logger'

const indexer = async () => {
  log.info('Subscribing to blockchain data ...')
}

const server = http.createServer((_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Service running')
})

indexer()
server.listen(config.port, config.hostname, () => log.info(`Server running at http://${config.hostname}:${config.port}/`))
