const fp = require('fastify-plugin');

async function errorHandlerPlugin(fastify, opts) {
  fastify.setErrorHandler((err, req, reply) => {
    const { statusCode } = err;

    if (statusCode >= 400 && statusCode <= 499) {
      fastify.log.info(err?.message);
    } else {
      fastify.log.error({ err }, err?.message);
    }

    if (statusCode >= 400 && statusCode <= 499) {
      return reply.send(err);
    }

    return fastify.httpErrors.internalServerError('Sorry, there was an error processing your request.');
  });
}

module.exports = fp(errorHandlerPlugin);
