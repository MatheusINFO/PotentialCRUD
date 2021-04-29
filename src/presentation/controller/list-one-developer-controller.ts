import { ListOneDeveloper } from '@/domain/usecases'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { notFound, success } from '@/presentation/helpers'

export class ListOneDeveloperController implements Controller {
  constructor (
    private readonly listOneDeveloper: ListOneDeveloper
  ) {}

  async handle (params: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = params.params
      const developer = await this.listOneDeveloper.listOne({
        id
      })
      return success(developer)
    } catch (error) {
      return notFound(error)
    }
  }
}
