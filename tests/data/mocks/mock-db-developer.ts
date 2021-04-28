import { AddDeveloperRepository } from "@/data/protocols"
import { mockDeveloperResult } from "@/tests/domain/mocks"

export class AddDeveloperRepositorySpy implements AddDeveloperRepository {
    addDeveloperParams: AddDeveloperRepository.Params
    developer = mockDeveloperResult()

    async add(params: AddDeveloperRepository.Params): Promise<AddDeveloperRepository.Result> {
      this.addDeveloperParams = params
      return this.developer
    }
}