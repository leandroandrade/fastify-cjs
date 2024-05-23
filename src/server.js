const closeWithGrace = require('close-with-grace');

const appPlugin = require('./app');
const configs = require('./configs');

(async function main() {
  const fastify = await appPlugin(configs);
  await fastify.listen({ port: fastify.config.PORT, host: '0.0.0.0' });

  closeWithGrace({ delay: 1000 }, async ({ signal, err }) => {
    if (err) {
      fastify.log.error({ err }, 'server closing due to error');
    } else {
      fastify.log.info(`${signal} received, server closing...`);
    }
    await fastify.close();

    fastify.log.info('server closed!');
  });
}());
