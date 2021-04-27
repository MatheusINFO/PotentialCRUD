import { DeveloperModel } from '@/domain/models'

type DeveloperRequest = {
  nome?: string
  sexo?: string
  idade?: number
  hobby?: string
  datanascimento?: Date
}

export type UpdateDeveloper = {
  update (params: UpdateDeveloper.Params): Promise<UpdateDeveloper.Result>
}

export namespace UpdateDeveloper {
  export type Params = {
    id: string
    developer: DeveloperRequest
  }
  export type Result = DeveloperModel
}
