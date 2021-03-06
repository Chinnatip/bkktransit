// set env
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
console.warn(`You are running ${process.env.NODE_ENV} mode.`)

// require module
const express = require('./config/express')

// execute module
const app = express()
const server = app.listen(5000, function() {
  const port = server.address().port
  const hostname = server.address().address
  console.log(`Server running at ${hostname}:${port}`)
})
