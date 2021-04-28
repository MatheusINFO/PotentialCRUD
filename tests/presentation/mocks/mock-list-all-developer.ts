import { ListAllDevelopers, ListOneDeveloper } from '@/domain/usecases'
import { mockDeveloperResult } from '@/tests/domain/mocks'

export class ListAllDevelopersSpy implements ListAllDevelopers {
  listAllDevelopersParams: ListOneDeveloper.Params
  developer = [
    mockDeveloperResult(),
    mockDeveloperResult()
  ]

  async listAll (params?: ListAllDevelopers.Params): Promise<ListAllDevelopers.Result> {
    this.listAllDevelopersParams = params
    return this.developer
  }
}
