const appPlugin = require('../../src/app');
const configs = require('./configs-test');

async function buildApp(t) {
  const fastify = await appPlugin(configs);

  t.teardown(async () => {
    await fastify.close();
  });
  return fastify;
}

module.exports = {
  buildApp,
};
