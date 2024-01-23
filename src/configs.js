const { randomUUID } = require('crypto');

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
};
