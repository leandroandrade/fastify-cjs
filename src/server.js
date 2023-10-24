const closeWithGrace = require('close-with-grace');

const appPlugin = require('./app');
const configs = require('./configs');

async function main() {
  const fastify = await appPlugin(configs);
  await fastify.listen({ port: fastify.config.PORT, host: '0.0.0.0' });

  closeWithGrace({ delay: 1000 }, async ({ signal }) => {
    try {
      fastify.log.info(`${signal} signal received. Closing application...`);

      fastify.log.info('Closing HTTP server...');
      await fastify.close();
      fastify.log.info('HTTP server closed!');

      fastify.log.info('Application closed successfully!');
      process.exit(0);
    } catch (err) {
      fastify.log.error(`Application exited with error: ${err}`);
      process.exit(1);
    }
  });
}

main().catch(() => process.exit(1));
