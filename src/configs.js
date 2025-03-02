const { randomUUID } = require('crypto');

/**
 * @type {import('fastify').FastifyServerOptions} Instance of Fastify
 */
module.exports = {
  disableRequestLogging: true,
  logger: {
    level: process.env.LOG_LEVEL || 'debug'
  },
  genReqId(req) {
    return req.headers['x-correlation-id'] || randomUUID();
  },
  ajv: {
    customOptions: {
      removeAdditional: true,
      coerceTypes: 'array',
      useDefaults: true
    }
  },
  ignoreTrailingSlash: true,
  bodyLimit: 4 * 1024, // 4 KB
  requestTimeout: 30000
};
