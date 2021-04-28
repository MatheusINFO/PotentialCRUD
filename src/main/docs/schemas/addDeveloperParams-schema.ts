export const addDeveloperParamsSchema = {
  type: 'object',
  properties: {
    nome: {
      type: 'string'
    },
    sexo: {
      type: 'string'
    },
    idade: {
      type: 'number'
    },
    hobby: {
      type: 'string'
    },
    datanascimento: {
      type: 'string'
    }
  },
  required: ['nome', 'sexo', 'idade', 'hobby', 'datanascimento']
}
