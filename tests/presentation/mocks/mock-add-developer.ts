import { AddDeveloper } from '@/domain/usecases'
import { mockDeveloperResult } from '@/tests/domain/mocks'

export class AddDeveloperSpy implements AddDeveloper {
  addDeveloperParams: AddDeveloper.Params
  developer = mockDeveloperResult()

  async add (params: AddDeveloper.Params): Promise<AddDeveloper.Result> {
    this.addDeveloperParams = params
    return this.developer
  }
}
