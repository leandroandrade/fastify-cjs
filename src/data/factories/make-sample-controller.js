const { SampleController } = require('../controllers/sample-controller');
const { SampleRepository } = require('../repositories/sample-repository');

exports.makeSampleController = fastify => new SampleController(fastify, new SampleRepository());
