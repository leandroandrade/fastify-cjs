const autoLoad = require('@fastify/autoload');
const { join } = require('path');
const Fastify = require('fastify');

async function appPlugin(configs) {
  const app = Fastify(configs);

  await app.register(autoLoad, {
    dir: join(__dirname, 'plugins'),
  }).register(autoLoad, {
    dir: join(__dirname, 'decorators'),
  }).register(autoLoad, {
    dir: join(__dirname, 'routes'),
    options: { prefix: 'api' },
  });

  app.get('/', (req, reply) => {
    return { message: 'Up and running' };
  });

  return app;
}

module.exports = appPlugin;
