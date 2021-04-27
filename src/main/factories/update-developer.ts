import { DbUpateDeveloper } from '@/data/usecases'
import { DeveloperRepository } from '@/infra/mongodb'
import { UpdateDeveloperController } from '@/presentation/controller'

export const makeUpdateDeveloper = (): UpdateDeveloperController => {
  const updateDeveloper = new DeveloperRepository()
  const dbUpdateDeveloper = new DbUpateDeveloper(updateDeveloper)
  return new UpdateDeveloperController(dbUpdateDeveloper)
}
