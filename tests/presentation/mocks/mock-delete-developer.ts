import { DeleteDeveloper } from '@/domain/usecases'
import { mockDeveloperResult } from '@/tests/domain/mocks'

export class DeleteDeveloperSpy implements DeleteDeveloper {
  deleteDeveloperParams: DeleteDeveloper.Params
  developer = mockDeveloperResult()

  async delete (params: DeleteDeveloper.Params): Promise<DeleteDeveloper.Result> {
    this.deleteDeveloperParams = params
    return this.developer
  }
}
