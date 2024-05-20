const fp = require('fastify-plugin');

async function defaultSchemas(fastify, opts) {
  const schemaError = {
    type: 'object',
    properties: {
      statusCode: { type: 'integer' },
      error: { type: 'string' },
      message: { type: 'string' },
    },
  };

  fastify.addSchema({
    $id: 'http',
    ...schemaError,
  });
}

module.exports = fp(defaultSchemas);
