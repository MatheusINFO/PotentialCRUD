import { UpdateDeveloper } from '@/domain/usecases'
import { mockDeveloperResult } from '@/tests/domain/mocks'

export class UpdateDeveloperSpy implements UpdateDeveloper {
  updateDeveloperParams: UpdateDeveloper.Params
  developer = mockDeveloperResult()

  async update (params: UpdateDeveloper.Params): Promise<UpdateDeveloper.Result> {
    this.updateDeveloperParams = params
    return this.developer
  }
}
