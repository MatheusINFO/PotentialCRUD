import { DbDeleteDeveloper } from '@/data/usecases'
import { DeveloperRepository } from '@/infra/mongodb'
import { DeleteDeveloperController } from '@/presentation/controller'

export const makeDeleteDeveloper = (): DeleteDeveloperController => {
  const deleteDeveloper = new DeveloperRepository()
  const dbDeleteDeveloper = new DbDeleteDeveloper(deleteDeveloper)
  return new DeleteDeveloperController(dbDeleteDeveloper)
}
