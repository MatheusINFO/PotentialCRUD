import { DeveloperModel } from '@/domain/models'

export type ListOneDeveloperRepository = {
  listOne (params: ListOneDeveloperRepository.Params): Promise<ListOneDeveloperRepository.Result>
}

export namespace ListOneDeveloperRepository {
  export type Params = {
    id: string
  }
  export type Result = DeveloperModel
}
