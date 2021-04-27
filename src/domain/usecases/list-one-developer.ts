import { DeveloperModel } from '@/domain/models'

export type ListOneDeveloper = {
  listOne (params: ListOneDeveloper.Params): Promise<ListOneDeveloper.Result>
}

export namespace ListOneDeveloper {
  export type Params = {
    id: string
  }
  export type Result = DeveloperModel
}
