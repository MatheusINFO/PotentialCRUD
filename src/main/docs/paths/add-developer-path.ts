export const addDeveloperPath = {
  post: {
    tags: ['Developer'],
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
        description: 'Sucesso',
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
