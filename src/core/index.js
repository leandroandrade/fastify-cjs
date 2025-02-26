const fp = require('fastify-plugin');
const autoLoad = require('@fastify/autoload');
const { join } = require('path');

async function appPlugin(app, config) {
  await app.register(autoLoad, {
    dir: join(__dirname, 'plugins')
  });
}

module.exports = fp(appPlugin);
