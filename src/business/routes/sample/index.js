const { sampleSchema, schemaError } = require('./schema');

module.exports = async (fastify, opts) => {
  fastify.get('/', sampleSchema, (req, reply) => {
    const { key, ids } = req.query;

    req.log.info('Sample logging...');

    const date = fastify.repositories.getDateRepository(2022, 10, 25);
    return reply.send({
      key,
      today: fastify.dateFormat.toLocaleDate(date),
      ids
    });
  });

  fastify.get('/error', schemaError, (req, reply) => {
    return fastify.httpErrors.notFound('Sample Error!');
  });
};
