export const deleteDeveloperPath = {
  delete: {
    tags: ['Developers'],
    summary: 'Rota para deletar desenvolvedor',
    parameters: [{
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      204: {
        description: 'Desenvolvedor removido com sucesso'
      },
      400: {
        $ref: '#/components/badRequest'
      }
    }
  }
}
