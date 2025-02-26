const fp = require('fastify-plugin');

async function date(fastify, opts) {
  fastify.decorate('repositories', {
    getDateRepository(year, month, date) {
      return new Date(year, month, date);
    }
  });
}

module.exports = fp(date);
