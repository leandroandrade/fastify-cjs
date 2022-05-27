const Fastify = require('fastify');
const { randomUUID: uuid } = require('crypto');

const setRoutes = require('./routes');
const setHandler = require('./handler');
const setPlugins = require('./plugins');
const setSwagger = require('./swagger');

const app = Fastify({
    logger: process.env.NODE_ENV !== 'test',
    genReqId(req) {
        return uuid();
    },
});

setSwagger(app);
setPlugins(app);
setRoutes(app);
setHandler(app);

module.exports = app;
