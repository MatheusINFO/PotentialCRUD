import { DbListOneDeveloper } from '@/data/usecases'
import { DeveloperRepository } from '@/infra/mongodb'
import { ListOneDeveloperController } from '@/presentation/controller'

export const makeListOneDeveloper = (): ListOneDeveloperController => {
  const listOneDeveloper = new DeveloperRepository()
  const dbListOneDeveloper = new DbListOneDeveloper(listOneDeveloper)
  return new ListOneDeveloperController(dbListOneDeveloper)
}
