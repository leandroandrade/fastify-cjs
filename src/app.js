const autoLoad = require('@fastify/autoload');
const { join } = require('path');
const Fastify = require('fastify');

async function appPlugin(configs) {
  const app = Fastify(configs);

  await app.register(autoLoad, {
    dir: join(__dirname, 'core'),
    encapsulate: false,
    maxDepth: 0
  }).register(autoLoad, {
    dir: join(__dirname, 'business'),
    encapsulate: false,
    maxDepth: 0
  });

  app.get('/', (req, reply) => {
    return { message: 'Up and running' };
  });

  return app;
}

module.exports = appPlugin;
