export const notFoundError = {
  description: 'Not Found Error',
  content: {
    'application/json': {
      schema: {
        $ref: '#schemas/error'
      }
    }
  }
}
