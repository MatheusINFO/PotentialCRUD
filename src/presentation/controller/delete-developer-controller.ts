import { DeleteDeveloper } from '@/domain/usecases'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { noContent, badRequest } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'

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
      if (!developer) {
        return badRequest(new InvalidParamError('id'))
      }
      return noContent()
    } catch (error) {
      return badRequest(error)
    }
  }
}
