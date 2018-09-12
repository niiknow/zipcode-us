import API from 'claudia-api-builder'

const api = new API()

function handler(request) {
  const qs = request.queryString || {}
  let rst = request.pathParams.zipcode
  rst = require(`./db/${rst.substr(0, 2)}/${rst}.json`)

  if (qs.callback) {
    rst = `${qs.callback}(${JSON.stringify(rst)});`
  }

  return rst
}

api.get('/', handler)

module.exports = api
