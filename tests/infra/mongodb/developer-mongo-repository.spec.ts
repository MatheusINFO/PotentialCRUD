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
})
