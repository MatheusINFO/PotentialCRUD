export const serverError = {
  description: 'Error interno',
  content: {
    'application/json': {
      schema: {
        $ref: '#schemas/error'
      }
    }
  }
}
