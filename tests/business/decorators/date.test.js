const Fastify = require('fastify');
const { test } = require('node:test');

const dateDecorator = require('../../../src/business/decorators/date');

test('should format date with locale string', async (t) => {
  const fastify = Fastify();
  t.after(async () => { await fastify.close(); });

  await fastify.register(dateDecorator);
  t.assert.strictEqual(fastify.dateFormat.toLocaleDate(new Date(2022, 10, 25)), 'November 25, 2022');
});
