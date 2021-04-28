import { DeleteDeveloper } from '@/domain/usecases'

export class DeleteDeveloperSpy implements DeleteDeveloper {
  deleteDeveloperParams: DeleteDeveloper.Params
  developer = null

  async delete (params: DeleteDeveloper.Params): Promise<DeleteDeveloper.Result> {
    this.deleteDeveloperParams = params
    return this.developer
  }
}
