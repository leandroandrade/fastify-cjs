const autoLoad = require('@fastify/autoload');
const { join } = require('path');

module.exports = app => {
    app.register(autoLoad, {
        dir: join(__dirname, '..', 'domain', 'routes'),
        options: { prefix: 'api' },
    });
};
