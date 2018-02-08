import test from 'ava';
import sinon from 'sinon';
import m from '.';

test.beforeEach(t => {
  t.context.done = sinon.spy();
});

test('Test JSON Call', t => {
  return m.proxyRouter({
    requestContext: {
      resourcePath: '/{zipcode}',
      httpMethod: 'GET'
    },
    pathParameters: {
      zipcode: '54321'
    }
  }, t.context).then(() => {
    const body = t.context.done.firstCall.args[1].body;
    const expected = '{"localities":[],"state":null,"postal_code":"54321","locality":null,"lat":null,"region":null,"city":null,"lng":null,"counties":[]}';
    t.is(body, expected, 'correctly read json file.');
    return t.true(t.context.done.calledOnce);
  });
});

test('Test JSONP Call', t => {
  return m.proxyRouter({
    requestContext: {
      resourcePath: '/{zipcode}',
      httpMethod: 'GET'
    },
    pathParameters: {
      zipcode: '54321'
    },
    queryStringParameters: {
      callback: 'hi'
    }
  }, t.context).then(() => {
    const body = t.context.done.firstCall.args[1].body;
    const expected = '"hi({\\"localities\\":[],\\"state\\":null,\\"postal_code\\":\\"54321\\",\\"locality\\":null,\\"lat\\":null,\\"region\\":null,\\"city\\":null,\\"lng\\":null,\\"counties\\":[]});"';
    t.is(body, expected, 'correctly read json file.');
    return t.true(t.context.done.calledOnce);
  });
});
