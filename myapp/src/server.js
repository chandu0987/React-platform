const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set CORS headers
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

server.use(middlewares)
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001')
})
