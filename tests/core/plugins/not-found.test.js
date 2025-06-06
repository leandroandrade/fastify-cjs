const { test } = require('node:test');
const { buildApp } = require('../../shared/helper');

test('should return 404 with rate limit headers', async (t) => {
  const fastify = await buildApp(t);

  const res = await fastify.inject({
    method: 'GET',
    url: '/not-found-route'
  });

  t.assert.strictEqual(res.statusCode, 404);
  t.assert.deepStrictEqual(res.json(), {
    statusCode: 404,
    error: 'Not Found',
    message: 'Sorry, we could not find what you were looking for.'
  });
});
