const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router("data.json")
const middlewares = jsonserver.defaults()
const port = process.env.PORT || 4000

server.use(middlewares)
server.use(router)
server.listen(port, ()=>{
    console.log("esta corriendo ")})