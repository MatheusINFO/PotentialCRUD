import { DeveloperModel } from "@/domain/models"

export type ListAllDevelopersRepository = {
    listAll (params?: ListAllDevelopersRepository.Params): Promise<ListAllDevelopersRepository.Result>
}

export namespace ListAllDevelopersRepository {
    export type Params = any
    export type Result = DeveloperModel[]
}