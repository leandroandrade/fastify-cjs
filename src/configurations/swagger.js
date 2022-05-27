const path = require('path');
const swagger = require('@fastify/swagger');

module.exports = app => {
    app.register(swagger, {
        routePrefix: '/docs',
        exposeRoute: true,
        mode: 'static',
        specification: {
            path: path.join(__dirname, '..', 'swagger', 'sample-swagger.yaml'),
        },
    });
};
