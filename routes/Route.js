const latlngController = require('../controllers/latlngController')

const routes = [
  {
    method: 'GET',
    url: '/api/coordinate',
     handler: latlngController.getCoordinate
  },
  {
    method: 'POST',
    url: '/api/coordinate',
    handler: latlngController.postCoordinate
  },
  {
    method: 'GET',
    url: '/api/search',
    handler: latlngController.getDataSearch
  }

]
module.exports = routes