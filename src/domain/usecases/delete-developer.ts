import { DeveloperModel } from '@/domain/models'

export type DeleteDeveloper = {
  delete (params: DeleteDeveloper.Params): Promise<DeleteDeveloper.Result>
}

export namespace DeleteDeveloper {
  export type Params = {
    id: string
  }
  export type Result = DeveloperModel
}
