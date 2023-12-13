const fp = require('fastify-plugin');
const fastifyEnv = require('@fastify/env');

async function envPlugin(fastify, opts) {
  const schema = {
    type: 'object',
    required: [
      'PORT',
      'RATELIMIT_MAX_REQUEST_TIME_WINDOW',
      'RATELIMIT_TIME_WINDOW',
    ],
    properties: {
      PORT: { type: 'string', default: 3000 },
      RATELIMIT_MAX_REQUEST_TIME_WINDOW: { type: 'integer' },
      RATELIMIT_TIME_WINDOW: { type: 'integer' },
    },
  };

  await fastify.register(fastifyEnv, {
    schema,
  });
}

module.exports = fp(envPlugin, {
  name: 'env',
});
