const fp = require('fastify-plugin');

async function errorHandlerPlugin(fastify, opts) {
  fastify.setErrorHandler((err, req, reply) => {
    req.log.error({ err }, err?.message);
    reply.send(err);
  });
}

module.exports = fp(errorHandlerPlugin);
