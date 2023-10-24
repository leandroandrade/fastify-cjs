const common = {
  type: 'object',
  properties: {
    statusCode: { type: 'integer' },
    error: { type: 'string' },
    message: { type: 'string' },
  },
};

module.exports = {
  '4xx': { ...common },
  '5xx': { ...common },
};
