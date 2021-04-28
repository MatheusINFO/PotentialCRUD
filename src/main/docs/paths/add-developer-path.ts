export const addDeveloperPath = {
  post: {
    tags: ['Developers'],
    summary: 'Rota para cadastrar desenvolvedor',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#schemas/addDeveloperParams'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Desenvolvedor adicionado com sucesso',
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
