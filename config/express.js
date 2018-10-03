const config = require('./config')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

module.exports = function() {
  const app = express()

  // allow
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
  })

  // bodyParser
  app.use(bodyParser.json())

  // routes
  require('../app/routes/static.route')(app)

  // set static folder
  app.use(express.static('./public'))

  // request path not exist
  app.use('*', function(req, res) {
    res.status(404).json({ error: '404 Page Not Found' })
  })

  return app
}
