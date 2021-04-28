export const listOneDeveloperPath = {
  get: {
    tags: ['Developers'],
    summary: 'Rota para listar um desenvolvedor a partir do Id',
    parameters: [{
      in: 'path',
      name: 'devId',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      200: {
        description: 'Desenvolvedor listado com sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/developer'
            }
          }
        }
      }
    }
  }
}
