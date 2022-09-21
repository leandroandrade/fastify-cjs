const path = require('path');
const swagger = require('@fastify/swagger');
const fp = require('fastify-plugin');

async function swaggerPlugin(fastify, opts) {
    fastify.register(swagger, {
        routePrefix: '/docs',
        exposeRoute: true,
        mode: 'static',
        specification: {
            path: path.join(__dirname, '..', 'swagger', 'sample-swagger.yaml'),
        },
    });
}

module.exports = fp(swaggerPlugin);
