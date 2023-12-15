const fp = require('fastify-plugin');
const rateLimit = require('@fastify/rate-limit');

async function rateLimitPlugin(fastify, opts) {
  fastify.register(rateLimit, {
    max: fastify.config.RATELIMIT_MAX_REQUEST_TIME_WINDOW,
    timeWindow: fastify.config.RATELIMIT_TIME_WINDOW,
  });
}

module.exports = fp(rateLimitPlugin, {
  name: 'ratelimit',
  dependencies: ['env'],
});
