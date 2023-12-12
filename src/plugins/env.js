const fp = require('fastify-plugin');
const fastifyEnv = require('@fastify/env');

async function envPlugin(fastify, opts) {
  const schema = {
    type: 'object',
    required: ['PORT'],
    properties: {
      PORT: { type: 'string', default: 3000 },
      RATELIMIT_MAX_REQUEST_TIME_WINDOW: { type: 'integer' },
      RATELIMIT_TIME_WINDOW: { type: 'integer' },
    },
  };

  await fastify.register(fastifyEnv, {
    schema,
    dotenv: true,
  });
}

module.exports = fp(envPlugin, {
  name: 'env',
});
