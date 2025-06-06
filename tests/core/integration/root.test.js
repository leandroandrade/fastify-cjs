const { test } = require('node:test');
const { buildApp } = require('../../shared/helper');

test('should return sample response', async (t) => {
  const fastify = await buildApp(t);

  const res = await fastify.inject({
    method: 'GET',
    url: '/'
  });

  t.assert.strictEqual(res.statusCode, 200);
  t.assert.deepStrictEqual(res.json(), { message: 'Up and running' });
});
