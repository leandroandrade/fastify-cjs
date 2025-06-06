const { test } = require('node:test');
const { buildApp } = require('../../shared/helper');

test('should return sample response', async (t) => {
  const fastify = await buildApp(t);

  const response = await fastify.inject({
    method: 'GET',
    url: '/docs'
  });

  t.assert.strictEqual(response.statusCode, 200);
  t.assert.deepStrictEqual(typeof response.payload, 'string');
});
