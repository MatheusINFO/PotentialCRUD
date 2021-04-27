import { DbListAllDevelopers } from '@/data/usecases'
import { DeveloperRepository } from '@/infra/mongodb'
import { ListAllDevelopersController } from '@/presentation/controller'

export const makeListAllDevelopersController = (): ListAllDevelopersController => {
  const listAllDevelopers = new DeveloperRepository()
  const dbListAllDevelopers = new DbListAllDevelopers(listAllDevelopers)
  return new ListAllDevelopersController(dbListAllDevelopers)
}
