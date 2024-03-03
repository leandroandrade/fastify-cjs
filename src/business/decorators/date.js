const fp = require('fastify-plugin');

function toLocaleDate(date) {
  return date.toLocaleString('en-US', {
    dateStyle: 'long',
  });
}

async function date(fastify, opts) {
  fastify.decorate('dateFormat', {
    toLocaleDate,
  });
}

module.exports = fp(date);
