const fp = require('fastify-plugin');

async function notfoundPlugin(fastify) {
  const opts = {
    preHandler: fastify.rateLimit({
      max: fastify.config.RATELIMIT_GLOBAL_MAX_NOT_FOUND,
      timeWindow: fastify.config.RATELIMIT_GLOBAL_TIME_WINDOW_NOT_FOUND
    })
  };

  fastify.setNotFoundHandler(opts, (req, reply) => {
    return fastify.httpErrors.notFound('Sorry, we could not find what you were looking for.');
  });
}

module.exports = fp(notfoundPlugin, {
  dependencies: ['ratelimit', 'env']
});
