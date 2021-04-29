import {
  AddDeveloper,
  DeleteDeveloper,
  ListAllDevelopers,
  ListOneDeveloper,
  UpdateDeveloper
} from '@/domain/usecases'
import { mockDeveloperResult } from '@/tests/domain/mocks'

export class AddDeveloperSpy implements AddDeveloper {
  addDeveloperParams: AddDeveloper.Params
  developer = mockDeveloperResult()

  async add (params: AddDeveloper.Params): Promise<AddDeveloper.Result> {
    this.addDeveloperParams = params
    return this.developer
  }
}

export class DeleteDeveloperSpy implements DeleteDeveloper {
  deleteDeveloperParams: DeleteDeveloper.Params
  developer = null

  async delete (params: DeleteDeveloper.Params): Promise<DeleteDeveloper.Result> {
    this.deleteDeveloperParams = params
    return this.developer
  }
}

export class ListAllDevelopersSpy implements ListAllDevelopers {
  listAllDevelopersParams: ListAllDevelopers.Params
  developer = [
    mockDeveloperResult(),
    mockDeveloperResult()
  ]

  async listAll (params?: ListAllDevelopers.Params): Promise<ListAllDevelopers.Result> {
    this.listAllDevelopersParams = params
    return this.developer
  }
}

export class ListOneDeveloperSpy implements ListOneDeveloper {
  listDeveloperParams: ListOneDeveloper.Params
  developer = mockDeveloperResult()

  async listOne (params: ListOneDeveloper.Params): Promise<ListOneDeveloper.Result> {
    this.listDeveloperParams = params
    return this.developer
  }
}

export class UpdateDeveloperSpy implements UpdateDeveloper {
  updateDeveloperParams: UpdateDeveloper.Params
  developer = mockDeveloperResult()

  async update (params: UpdateDeveloper.Params): Promise<UpdateDeveloper.Result> {
    this.updateDeveloperParams = params
    return this.developer
  }
}
