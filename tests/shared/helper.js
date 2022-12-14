const app = require('../../src/app');

function buildApp(t) {
  const fastify = app();

  t.teardown(async () => {
    await fastify.close();
  });
  return fastify;
}

module.exports = {
  buildApp,
};
