import { ListAllDevelopers } from '@/domain/usecases'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { serverError, success } from '@/presentation/helpers'

export class ListAllDevelopersController implements Controller {
  constructor (
    private readonly listAllDevelopers: ListAllDevelopers
  ) {}

  async handle (params: HttpRequest): Promise<HttpResponse> {
    try {
      const developers = await this.listAllDevelopers.listAll(params.query)
      return success(developers)
    } catch (error) {
      return serverError()
    }
  }
}
