const t = require('tap');
const { buildApp } = require('../../shared/helper');

const { test } = t;

test('should return 404 with rate limit headers', async (t) => {
  const fastify = await buildApp(t);

  const res = await fastify.inject({
    method: 'GET',
    url: '/not-found-route',
  });

  t.equal(res.statusCode, 404);
  t.same(res.json(), {
    statusCode: 404,
    error: 'Not Found',
    message: 'Sorry, we could not find what you were looking for.',
  });

  const { headers } = res;
  t.equal(headers['x-ratelimit-limit'], '8');
  t.equal(headers['x-ratelimit-remaining'], '7');
  t.equal(headers['x-ratelimit-reset'], '60');
});
