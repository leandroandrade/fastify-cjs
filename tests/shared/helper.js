const Fastify = require('fastify');

const appPlugin = require('../../src/app');
const configs = require('./configs-test');

async function buildApp(t) {
  const fastify = Fastify(configs);
  await fastify.register(appPlugin);

  t.teardown(async () => {
    await fastify.close();
  });
  return fastify;
}

module.exports = {
  buildApp,
};
