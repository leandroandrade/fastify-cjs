const sampleSchema = {
  schema: {
    querystring: {
      additionalProperties: false,
      type: 'object',
      properties: {
        key: {
          type: 'integer',
          default: 1,
          minimum: 1
        },
        ids: {
          type: 'array',
          items: { type: 'string' },
          default: []
        }
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          key: {
            type: 'integer'
          },
          today: {
            type: 'string'
          },
          ids: {
            type: 'array',
            items: { type: 'string' }
          }
        }
      },
      '4xx': {
        $ref: 'error#'
      },
      '5xx': {
        $ref: 'error#'
      }
    }
  }
};

const schemaError = {
  response: {
    '4xx': {
      $ref: 'error#'
    },
    '5xx': {
      $ref: 'error#'
    }
  }
};

module.exports = {
  sampleSchema,
  schemaError
};
