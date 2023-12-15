const fp = require('fastify-plugin');

async function notfoundPlugin(fastify, opts) {
  fastify.setNotFoundHandler({
    preHandler: fastify.rateLimit({
      max: fastify.config.RATELIMIT_MAX_REQUEST_TIME_WINDOW_NOT_FOUND,
      timeWindow: fastify.config.RATELIMIT_TIME_WINDOW_NOT_FOUND,
    }),
  }, (req, reply) => {
    return fastify.httpErrors.notFound('Resource not found');
  });
}

module.exports = fp(notfoundPlugin, {
  dependencies: ['ratelimit', 'env'],
});
