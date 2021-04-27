import { DeveloperModel } from '@/domain/models'

export type AddDeveloper = {
  add (params: AddDeveloper.Params): Promise<AddDeveloper.Result>
}

export namespace AddDeveloper {
  export type Params = Omit<DeveloperModel, 'id'>
  export type Result = DeveloperModel
}
