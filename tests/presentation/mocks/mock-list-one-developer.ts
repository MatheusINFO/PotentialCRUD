import { ListOneDeveloper } from '@/domain/usecases'
import { mockDeveloperResult } from '@/tests/domain/mocks'

export class ListOneDeveloperSpy implements ListOneDeveloper {
  listDeveloperParams: ListOneDeveloper.Params
  developer = mockDeveloperResult()

  async listOne (params: ListOneDeveloper.Params): Promise<ListOneDeveloper.Result> {
    this.listDeveloperParams = params
    return this.developer
  }
}
