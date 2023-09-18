const Fastify = require('fastify');
const t = require('tap');

const { test } = t;
const errorHandler = require('../../../src/plugins/error-handler');

test('should format date with locale string', async (t) => {
  const fastify = Fastify();
  t.teardown(fastify.close.bind(fastify));

  await fastify.register(errorHandler);

  const schema = {
    params: {
      message: {
        type: 'string',
        maxLength: 2,
      },
    },
  };
  fastify.get('/:message', { schema }, async (req, reply) => {
    t.fail('should not pass here!');
  });

  const response = await fastify.inject({
    method: 'GET',
    url: '/hello',
  });

  t.equal(response.statusCode, 400);
  t.strictSame(response.json(), {
    statusCode: 400,
    code: 'FST_ERR_VALIDATION',
    error: 'Bad Request',
    message: 'params/message must NOT have more than 2 characters',
  });
});

test('should return generic error', async t => {
  const fastify = Fastify();
  t.teardown(fastify.close.bind(fastify));

  await fastify.register(errorHandler);

  fastify.get('/', (request, reply) => {
    throw new Error('generic error');
  });

  const response = await fastify.inject('/');

  t.equal(response.statusCode, 500);
  t.strictSame(response.json(), {
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'Unexpected error occurred!',
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
  t.teardown(fastify.close.bind(fastify));

  await fastify.register(errorHandler);

  fastify.get('/', (request, reply) => {
    throw new SomeError('Custom Error!', 422);
  });

  const response = await fastify.inject('/');
  t.equal(response.statusCode, 422);

  t.strictSame(response.json(), {
    statusCode: 422,
    error: 'Unprocessable Entity',
    message: 'Custom Error!',
  });
});
