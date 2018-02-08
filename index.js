const ApiBuilder = require('claudia-api-builder');

const api = new ApiBuilder();

module.exports = api;

// query operation
api.get('/{zipcode}', request => {
  const qs = request.queryString || {};
  let rst = request.pathParams.zipcode;
  rst = require(`./db/${rst.substr(0, 2)}/${rst}.json`);

  if (qs.callback) {
    rst = `${qs.callback}(${JSON.stringify(rst)});`;
  }

  return rst;
});
