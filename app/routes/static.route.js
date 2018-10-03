const config = require('../../config/config')
const PREFIX_API = `/api/${config.version}/static`
const static = require('../controllers/static.controller')

module.exports = function(app) {
  app.route(`${PREFIX_API}/deals`).get(static.deals)
  app.route(`${PREFIX_API}/profits`).get(static.profits)
  app.route(`${PREFIX_API}/contents`).get(static.contents)
  app.route(`${PREFIX_API}/destinations`).get(static.destinations)
  app.route(`${PREFIX_API}/btsLocation`).get(static.btsLocation)
}
