import { DeveloperModel } from '@/domain/models'

type DeveloperRequest = {
  nome?: string
  sexo?: string
  idade?: number
  hobby?: string
  datanascimento?: Date
}

export type UpdateDeveloperRepository = {
  update (params: UpdateDeveloperRepository.Params): Promise<UpdateDeveloperRepository.Result>
}

export namespace UpdateDeveloperRepository {
  export type Params = {
    id: string
    developer: DeveloperRequest
  }
  export type Result = DeveloperModel
}
