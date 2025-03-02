const fp = require('fastify-plugin');
const autoLoad = require('@fastify/autoload');
const { join } = require('path');

async function appPlugin(app, config) {
  await app.register(autoLoad, {
    dir: join(__dirname, 'decorators')
  }).register(autoLoad, {
    dir: join(__dirname, 'routes'),
    options: { prefix: 'api' }
  }).register(autoLoad, {
    dir: join(__dirname, 'repositories')
  });
}

module.exports = fp(appPlugin);
