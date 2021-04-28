export const updateDeveloperPath = {
  put: {
    tags: ['Developers'],
    summary: 'Rota para atualizar desenvolvedor',
    parameters: [{
      in: 'path',
      name: 'ID',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#schemas/updateDeveloperParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Desenvolvedor atualizado com sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/developer'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      }
    }
  }
}
