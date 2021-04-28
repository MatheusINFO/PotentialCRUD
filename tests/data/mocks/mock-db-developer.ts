import { AddDeveloperRepository, DeleteDeveloperRepository, ListAllDevelopersRepository, ListOneDeveloperRepository, UpdateDeveloperRepository } from "@/data/protocols"
import { mockDeveloperResult } from "@/tests/domain/mocks"

export class AddDeveloperRepositorySpy implements AddDeveloperRepository {
    addDeveloperParams: AddDeveloperRepository.Params
    developer = mockDeveloperResult()

    async add(params: AddDeveloperRepository.Params): Promise<AddDeveloperRepository.Result> {
      this.addDeveloperParams = params
      return this.developer
    }
}

export class DeleteDeveloperRepositorySpy implements DeleteDeveloperRepository {
  deleteDeveloperParams: DeleteDeveloperRepository.Params
  developer = null

  async delete(params: DeleteDeveloperRepository.Params): Promise<DeleteDeveloperRepository.Result> {
    this.deleteDeveloperParams = params
    return this.developer
  }
}

export class UpdateDeveloperRepositorySpy implements UpdateDeveloperRepository {
  updateDeveloperParams: DeleteDeveloperRepository.Params
  developer = mockDeveloperResult()

  async update(params: UpdateDeveloperRepository.Params): Promise<UpdateDeveloperRepository.Result> {
    this.updateDeveloperParams = params
    return this.developer
  }
}

export class ListOneDeveloperRepositorySpy implements ListOneDeveloperRepository {
  listOneDeveloperParams: ListOneDeveloperRepository.Params
  developer = mockDeveloperResult()

  async listOne(params: ListOneDeveloperRepository.Params): Promise<ListOneDeveloperRepository.Result> {
    this.listOneDeveloperParams = params
    return this.developer
  }
}

export class ListAllDevelopersRepositorySpy implements ListAllDevelopersRepository {
  listAllDevelopersParams: ListAllDevelopersRepository.Params
  developer = [
    mockDeveloperResult(),
    mockDeveloperResult()
  ]

  async listAll(params?: ListAllDevelopersRepository.Params): Promise<ListAllDevelopersRepository.Result> {
    this.listAllDevelopersParams = params
    return this.developer
  }
}