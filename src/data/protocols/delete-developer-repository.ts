import { DeveloperModel } from "@/domain/models"

export type DeleteDeveloperRepository = {
  delete (params: DeleteDeveloperRepository.Params): Promise<DeleteDeveloperRepository.Result>
}

export namespace DeleteDeveloperRepository {
  export type Params = {
    id: string
  }
  export type Result = DeveloperModel
}
