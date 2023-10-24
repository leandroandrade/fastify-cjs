const schemasErrors = require('../schemas-errors');

const getSampleSchema = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        key: {
          type: 'integer',
          default: 1,
          minimum: 1,
        },
        ids: {
          type: 'array',
          items: { type: 'string' },
          default: [],
        },
      },
    },
    response: {
      ...schemasErrors,
      200: {
        type: 'object',
        properties: {
          key: {
            type: 'integer',
          },
          today: {
            type: 'string',
          },
          ids: {
            type: 'array',
            items: { type: 'string' },
          },
        },
      },
    },
  },
};

module.exports = {
  getSampleSchema,
};
