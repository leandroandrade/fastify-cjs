const createApp = require('../../src/app');

async function buildApp(t, customConfigs = { logger: false }) {
  const fastify = await createApp(customConfigs);

  t.after(async () => {
    await fastify.close();
  });
  return fastify;
}

module.exports = {
  buildApp
};
