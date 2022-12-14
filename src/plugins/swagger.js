const path = require('path');
const fp = require('fastify-plugin');
const swagger = require('@fastify/swagger');
const fastifySwaggerUi = require('@fastify/swagger-ui');

async function swaggerPlugin(fastify, opts) {
  fastify.register(swagger, {
    exposeRoute: true,
    mode: 'static',
    specification: {
      path: path.join(__dirname, '..', 'swagger', 'sample-swagger.yaml'),
    },
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    logLevel: 'silent',
  });
}

module.exports = fp(swaggerPlugin);
