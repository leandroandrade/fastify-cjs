const fp = require('fastify-plugin');
const fastifyEnv = require('@fastify/env');

async function envPlugin(fastify, opts) {
  const schema = {
    type: 'object',
    required: [
      'PORT',
      'HOST'
    ],
    properties: {
      PORT: { type: 'string', default: 3000 },
      HOST: { type: 'string', default: '0.0.0.0' }
    }
  };

  await fastify.register(fastifyEnv, {
    schema
  });
}

module.exports = fp(envPlugin, {
  name: 'env'
});
