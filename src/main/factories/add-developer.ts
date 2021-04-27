import { DbAddDeveloper } from '@/data/usecases'
import { DeveloperRepository } from '@/infra/mongodb'
import { AddDeveloperController } from '@/presentation/controller'

export const makeAddDeveloperController = (): AddDeveloperController => {
  const addDeveloperRepository = new DeveloperRepository()
  const dbAddDeveloper = new DbAddDeveloper(addDeveloperRepository)
  return new AddDeveloperController(dbAddDeveloper)
}
