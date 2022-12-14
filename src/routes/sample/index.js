const { getSampleSchema } = require('./schema');
const { makeSampleController } = require('../../data/factories/make-sample-controller');

module.exports = async (fastify, opts) => {
  fastify.get('/', getSampleSchema, (req, reply) => {
    return makeSampleController(fastify).handle(req, reply);
  });
};
