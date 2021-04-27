import { DeveloperModel } from '@/domain/models'

export type ListAllDevelopers = {
  listAll (params?: ListAllDevelopers.Params): Promise<ListAllDevelopers.Result>
}

export namespace ListAllDevelopers {
  export type Params = any
  export type Result = DeveloperModel[]
}
