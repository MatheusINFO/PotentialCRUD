import { DeveloperModel } from "@/domain/models"

export type AddDeveloperRepository = {
    add (params: AddDeveloperRepository.Params): Promise<AddDeveloperRepository.Result>
}

export namespace AddDeveloperRepository {
    export type Params = Omit<DeveloperModel, 'id'>
    export type Result = DeveloperModel
}