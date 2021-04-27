import { DeleteDeveloper } from '@/domain/usecases'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { serverError, success } from '@/presentation/helpers'

export class DeleteDeveloperController implements Controller {
  constructor (
    private readonly deleteDeveloper: DeleteDeveloper
  ) {}

  async handle (params: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = params.params
      const developer = await this.deleteDeveloper.delete({
        id
      })
      return success(developer)
    } catch (error) {
      return serverError()
    }
  }
}
