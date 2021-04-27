import { SexoModel } from '@/domain/models'
import { AddDeveloper } from '@/domain/usecases'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { badRequest, serverError, success } from '@/presentation/helpers'
import { InvalidParamError, MissingParamError } from '@/presentation/errors'

export class AddDeveloperController implements Controller {
  constructor (
    private readonly addDeveloper: AddDeveloper
  ) {}

  async handle (params: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['nome', 'sexo', 'idade', 'hobby', 'datanascimento']
      for (const field of requiredFields) {
        if (!params.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { nome, sexo, idade, hobby, datanascimento } = params.body
      if (!Object.values(SexoModel).includes(sexo)) {
        return badRequest(new InvalidParamError('sexo'))
      }
      const developer = await this.addDeveloper.add({
        nome,
        sexo,
        idade,
        hobby,
        datanascimento
      })
      return success(developer)
    } catch (error) {
      return serverError()
    }
  }
}
