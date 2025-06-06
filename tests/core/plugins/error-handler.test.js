const Fastify = require('fastify');
const { test } = require('node:test');

const sensiblePlugin = require('../../../src/core/plugins/sensible');
const errorHandler = require('../../../src/core/plugins/error-handler');

test('should format date with locale string', async (t) => {
  const fastify = Fastify();
  t.after(async () => { await fastify.close(); });

  await fastify.register(sensiblePlugin);
  await fastify.register(errorHandler);

  const schema = {
    params: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          maxLength: 2
        }
      }
    }
  };
  fastify.get('/:message', { schema }, async (req, reply) => {
    t.assert.ifError('should not pass here!');
  });

  const response = await fastify.inject({
    method: 'GET',
    url: '/hello'
  });

  t.assert.strictEqual(response.statusCode, 400);
  t.assert.deepStrictEqual(response.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'params/message must NOT have more than 2 characters'
  });
});

test('should return generic error', async t => {
  const fastify = Fastify();
  t.after(async () => { await fastify.close(); });

  await fastify.register(sensiblePlugin);
  await fastify.register(errorHandler);

  fastify.get('/', (request, reply) => {
    throw new Error('generic error');
  });

  const response = await fastify.inject('/');

  t.assert.strictEqual(response.statusCode, 500);
  t.assert.deepStrictEqual(response.json(), {
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'Sorry, there was an error processing your request.'
  });
});

test('should return custom error', async t => {
  class SomeError extends Error {
    constructor(message, statusCode) {
      super(message);

      this.statusCode = statusCode;
    }
  }

  const fastify = Fastify();
  t.after(async () => { await fastify.close(); });

  await fastify.register(sensiblePlugin);
  await fastify.register(errorHandler);

  fastify.get('/', (request, reply) => {
    throw new SomeError('Custom Error!', 422);
  });

  const response = await fastify.inject('/');
  t.assert.strictEqual(response.statusCode, 422);

  t.assert.deepStrictEqual(response.json(), {
    statusCode: 422,
    error: 'Unprocessable Entity',
    message: 'Custom Error!'
  });
});
