const Fastify = require('fastify');
const autoLoad = require('@fastify/autoload');
const { randomUUID: uuid } = require('crypto');
const { join } = require('path');

function buildApp() {
    const app = Fastify({
        logger: process.env.NODE_ENV !== 'test',
        genReqId(req) {
            return uuid();
        },
        ajv: {
            customOptions: {
                removeAdditional: true,
                coerceTypes: 'array',
                useDefaults: true,
            },
        },
    });

    app.register(autoLoad, {
        dir: join(__dirname, 'plugins'),
    });

    app.register(autoLoad, {
        dir: join(__dirname, 'decorators'),
    });

    app.register(autoLoad, {
        dir: join(__dirname, 'routes'),
        options: { prefix: 'api' },
    });

    return app;
}

module.exports = buildApp;
