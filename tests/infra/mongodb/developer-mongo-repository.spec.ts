import { Collection } from 'mongodb'
import { DeveloperRepository, MongoHelper } from '@/infra/mongodb'
import { mockDeveloperParams } from '@/tests/domain/mocks'

const makeSut = (): DeveloperRepository => {
  return new DeveloperRepository()
}

describe('Developer Mongo Repository', () => {
  let accountCollection: Collection

  beforeEach(async () => {
    accountCollection = await MongoHelper.findCollection('developers')
    await accountCollection.deleteMany({})
  })

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  describe('add()', () => {
    it('Should return an developer on add success', async () => {
      const sut = makeSut()
      const developer = await sut.add(mockDeveloperParams())
      expect(developer).toBeTruthy()
    })
  })

  describe('listOne()', () => {
    it('Should return an developer on success', async () => {
      const sut = makeSut()
      const result = await accountCollection.insertOne(mockDeveloperParams())
      const developer = result.ops[0]
      const httpResponse = await sut.listOne(developer._id)
      expect(httpResponse.id).toEqual(developer._id)
    })
  })

  describe('listAll()', () => {
    it('Should return all developers on success', async () => {
      const sut = makeSut()
      const firstDeveloper = mockDeveloperParams()
      const secondDeveloper = mockDeveloperParams()
      await accountCollection.insertMany([
        firstDeveloper,
        secondDeveloper
      ])
      const httpResponse = await sut.listAll({ page: 1 })
      expect(httpResponse[0].nome).toBe(firstDeveloper.nome)
      expect(httpResponse[1].nome).toBe(secondDeveloper.nome)
      expect(httpResponse[2].nome).toBe(undefined)
    })
  })
})
