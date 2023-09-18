const fp = require('fastify-plugin');

async function errorHandlerPlugin(fastify, opts) {
  fastify.setErrorHandler((err, req, reply) => {
    const { statusCode } = err;

    if (statusCode >= 400) {
      fastify.log.info(err?.message);
    } else {
      fastify.log.error({ err }, err?.message);
    }

    if (statusCode >= 400) {
      return reply.send(err);
    }

    return reply.status(500).send({
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'Unexpected error occurred!',
    });
  });
}

module.exports = fp(errorHandlerPlugin);
