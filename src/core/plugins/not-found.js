const fp = require('fastify-plugin');

async function notfoundPlugin(fastify) {
  fastify.setNotFoundHandler((req, reply) => {
    return fastify.httpErrors.notFound('Sorry, we could not find what you were looking for.');
  });
}

module.exports = fp(notfoundPlugin, {
  dependencies: ['env']
});
