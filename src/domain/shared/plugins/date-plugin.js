const fp = require('fastify-plugin');

function toLocaleDate(date) {
    return date.toLocaleString('en-US', {
        dateStyle: 'long',
    });
}

async function datePlugin(fastify, opts) {
    fastify.decorate('dateFormat', {
        toLocaleDate,
    });
}

module.exports = fp(datePlugin);
