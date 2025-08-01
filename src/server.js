const closeWithGrace = require('close-with-grace');

const createApp = require('./app');

(async function main() {
  const fastify = await createApp();
  await fastify.listen({ port: fastify.config.PORT, host: fastify.config.HOST });

  closeWithGrace({ delay: 10000 }, async ({ signal, err }) => {
    if (err) {
      fastify.log.error({ err }, 'server closing due to error');
    } else {
      fastify.log.info(`${signal} received, server closing...`);
    }
    await fastify.close();

    fastify.log.info('server closed!');
  });
}());
