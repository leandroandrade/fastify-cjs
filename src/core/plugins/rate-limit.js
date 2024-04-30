const fp = require('fastify-plugin');
const rateLimit = require('@fastify/rate-limit');

async function rateLimitPlugin(fastify, opts) {
  fastify.register(rateLimit, {
    global: fastify.config.RATELIMIT_GLOBAL,
    max: fastify.config.RATELIMIT_GLOBAL_MAX,
    timeWindow: fastify.config.RATELIMIT_GLOBAL_TIME_WINDOW,
  });
}

module.exports = fp(rateLimitPlugin, {
  name: 'ratelimit',
  dependencies: ['env'],
});
