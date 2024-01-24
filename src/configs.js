const { randomUUID } = require('crypto');

/**
 * @type {import('fastify').FastifyServerOptions} Instance of Fastify
 */
module.exports = {
  disableRequestLogging: true,
  logger: {
    level: process.env.LOG_LEVEL || 'debug',
  },
  genReqId(req) {
    return randomUUID();
  },
  ajv: {
    customOptions: {
      removeAdditional: true,
      coerceTypes: 'array',
      useDefaults: true,
    },
  },
  ignoreTrailingSlash: true,
};
