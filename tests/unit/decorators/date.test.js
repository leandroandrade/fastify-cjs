const Fastify = require('fastify');
const t = require('tap');

const { test } = t;
const dateDecorator = require('../../../src/decorators/date');

test('should format date with locale string', async (t) => {
  const fastify = Fastify();
  t.teardown(fastify.close.bind(fastify));

  await fastify.register(dateDecorator);
  t.equal(fastify.dateFormat.toLocaleDate(new Date(2022, 10, 25)), 'November 25, 2022');
});
