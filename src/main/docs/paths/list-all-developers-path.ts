export const listAllDevelopersPath = {
  get: {
    tags: ['Developers'],
    summary: 'Rota para listar todos desenvolvedores ou a partir da queryString com paginação',
    parameters: [{
      in: 'query',
      name: 'nome',
      required: false,
      schema: {
        type: 'string'
      }
    }, {
      in: 'query',
      name: 'sexo',
      required: false,
      schema: {
        type: 'string'
      }
    }, {
      in: 'query',
      name: 'idade',
      required: false,
      schema: {
        type: 'number'
      }
    }, {
      in: 'query',
      name: 'hobby',
      required: false,
      schema: {
        type: 'string'
      }
    }, {
      in: 'query',
      name: 'datanascimento',
      required: false,
      schema: {
        type: 'string'
      }
    }, {
      in: 'query',
      name: 'page',
      required: false,
      schema: {
        type: 'number'
      }
    }],
    responses: {
      200: {
        description: 'Desenvolvedores listados com sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/developers'
            }
          }
        }
      },
      404: {
        $ref: '#/components/notFound'
      }
    }
  }
}
