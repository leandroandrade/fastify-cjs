const closeWithGrace = require('close-with-grace');

const appPlugin = require('./app');
const configs = require('./configs');

async function main() {
  const fastify = await appPlugin(configs);
  await fastify.listen({ port: fastify.config.PORT, host: '0.0.0.0' });

  closeWithGrace({ delay: 1000 }, async ({ err }) => {
    if (err) {
      fastify.log.info({ err }, 'server closing due to error');
    }
    fastify.log.info('closing server...');

    await fastify.close();
    fastify.log.info('server closed!');
  });
}

main().catch(() => process.exit(1));
