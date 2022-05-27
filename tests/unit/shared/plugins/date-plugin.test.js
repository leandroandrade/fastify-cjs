const Fastify = require('fastify');
const t = require('tap');

const { test } = t;
const dateDecorator = require('../../../../src/domain/shared/plugins/date-plugin');

const fastify = Fastify();

t.before(async () => {
    await fastify.register(dateDecorator);
});

test('should format date with locale string', async t => {
    t.equal(fastify.dateFormat.toLocaleDate(new Date(2022, 10, 25)), 'November 25, 2022');
});
