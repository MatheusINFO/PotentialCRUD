import faker from 'faker'
import { DeveloperModel } from '@/domain/models'

export enum SexoModel {
  MASCULINO = 'M',
  FEMININO = 'F'
}

export const mockDeveloperParams = (): Omit<DeveloperModel, 'id'> => ({
  nome: faker.name.findName(),
  idade: faker.datatype.number(),
  sexo: SexoModel.MASCULINO,
  hobby: faker.random.word(),
  datanascimento: faker.date.recent()
})

export const mockDeveloperResult = (): DeveloperModel => ({
  id: faker.random.word(),
  nome: faker.name.findName(),
  idade: faker.datatype.number(),
  sexo: SexoModel.MASCULINO,
  hobby: faker.random.word(),
  datanascimento: faker.date.recent()
})
