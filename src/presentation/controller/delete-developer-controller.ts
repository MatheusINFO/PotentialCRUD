import { DeleteDeveloper } from '@/domain/usecases'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { noContent, badRequest } from '@/presentation/helpers'

export class DeleteDeveloperController implements Controller {
  constructor (
    private readonly deleteDeveloper: DeleteDeveloper
  ) {}

  async handle (params: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = params.params
      await this.deleteDeveloper.delete({
        id
      })
      return noContent()
    } catch (error) {
      return badRequest(error)
    }
  }
}
