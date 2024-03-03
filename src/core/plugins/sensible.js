const fp = require('fastify-plugin');
const sensible = require('@fastify/sensible');

async function sensiblePlugin(fastify, opts) {
  fastify.register(sensible);
}

module.exports = fp(sensiblePlugin);
