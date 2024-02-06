const fp = require('fastify-plugin');
const fastifyEnv = require('@fastify/env');

async function envPlugin(fastify, opts) {
  const schema = {
    type: 'object',
    required: [
      'PORT',

      'RATELIMIT_GLOBAL_MAX',
      'RATELIMIT_GLOBAL_TIME_WINDOW',

      'RATELIMIT_GLOBAL_MAX_NOT_FOUND',
      'RATELIMIT_GLOBAL_TIME_WINDOW_NOT_FOUND',
    ],
    properties: {
      PORT: { type: 'string', default: 3000 },

      RATELIMIT_GLOBAL_MAX: { type: 'integer' },
      RATELIMIT_GLOBAL_TIME_WINDOW: { type: 'integer' },

      RATELIMIT_GLOBAL_MAX_NOT_FOUND: { type: 'integer' },
      RATELIMIT_GLOBAL_TIME_WINDOW_NOT_FOUND: { type: 'integer' },
    },
  };

  await fastify.register(fastifyEnv, {
    schema,
  });
}

module.exports = fp(envPlugin, {
  name: 'env',
});
