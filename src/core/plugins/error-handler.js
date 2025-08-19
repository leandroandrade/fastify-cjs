const fp = require('fastify-plugin');

async function errorHandlerPlugin(fastify, opts) {
  fastify.setErrorHandler((err, req, reply) => {
    const { statusCode } = err;

    if (statusCode >= 400 && statusCode <= 499) {
      req.log.info(err?.message);
    } else {
      req.log.error({ err }, err?.message);
    }

    if (statusCode >= 400 && statusCode <= 499) {
      return fastify.httpErrors.createError(statusCode, err?.message || 'Erro de validação!')
    }

    return fastify.httpErrors.internalServerError('Sorry, there was an error processing your request.');
  });
}

module.exports = fp(errorHandlerPlugin);
