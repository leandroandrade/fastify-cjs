const { test } = require('node:test');
const { buildApp } = require('../../shared/helper');

test('should return sample response', async (t) => {
  const fastify = await buildApp(t);

  const response = await fastify.inject({
    method: 'GET',
    url: '/api/sample'
  });

  t.assert.strictEqual(response.statusCode, 200);
  t.assert.deepStrictEqual(response.json(), { key: 1, today: 'November 25, 2022', ids: [] });
});

test('should return sample response with ids', async (t) => {
  const fastify = await buildApp(t);

  const response = await fastify.inject({
    method: 'GET',
    url: '/api/sample/?ids=foo&ids=bar'
  });

  t.assert.strictEqual(response.statusCode, 200);
  t.assert.deepStrictEqual(response.json(), { key: 1, today: 'November 25, 2022', ids: ['foo', 'bar'] });
});

test('should return sample response with only one ids', async (t) => {
  const fastify = await buildApp(t);

  const response = await fastify.inject({
    method: 'GET',
    url: '/api/sample/?ids=foo'
  });

  t.assert.strictEqual(response.statusCode, 200);
  t.assert.deepStrictEqual(response.json(), { key: 1, today: 'November 25, 2022', ids: ['foo'] });
});

test('should return error', async (t) => {
  const fastify = await buildApp(t);

  const response = await fastify.inject({
    method: 'GET',
    url: '/api/sample/error'
  });

  t.assert.strictEqual(response.statusCode, 404);
  t.assert.deepStrictEqual(response.json(), {
    message: 'Sample Error!',
    error: 'Not Found',
    statusCode: 404
  });
});
