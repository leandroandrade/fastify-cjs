const t = require('tap');
const { buildApp } = require('../../shared/helper');

const { test } = t;

test('should return sample response', async (t) => {
  const fastify = await buildApp(t);

  const res = await fastify.inject({
    method: 'GET',
    url: '/',
  });

  t.equal(res.statusCode, 200);
  t.same(res.json(), { message: 'Up and running' });
});
