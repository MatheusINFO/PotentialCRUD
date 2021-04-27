import { UpdateDeveloper } from '@/domain/usecases'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { badRequest, serverError, success } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'
import { SexoModel } from '@/domain/models'

export class UpdateDeveloperController implements Controller {
  constructor (
    private readonly updateDeveloper: UpdateDeveloper
  ) {}

  async handle (params: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = params.params
      if (params.body.sexo && !Object.values(SexoModel).includes(params.body.sexo)) {
        return badRequest(new InvalidParamError('sexo'))
      }
      const developer = await this.updateDeveloper.update({
        id,
        developer: params.body
      })
      return success(developer)
    } catch (error) {
      return serverError()
    }
  }
}
