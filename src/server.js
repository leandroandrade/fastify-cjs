const closeWithGrace = require('close-with-grace');
const Fastify = require('fastify');

const app = require('./app');
const configs = require('./configs');

const port = process.env.PORT || 8080;
const fastify = Fastify(configs);

async function main() {
  await fastify.register(app)
    .listen({ port, host: '0.0.0.0' });

  fastify.log.info(`App running at ${port}`);

  closeWithGrace({ delay: 10000 }, async ({ signal }) => {
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

main().catch(err => {
  fastify.log.error(err, 'Cannot start server');
  process.exit(1);
});
