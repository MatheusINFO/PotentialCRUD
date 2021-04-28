import faker from 'faker'
import { DbListOneDeveloper } from "@/data/usecases"
import { ListOneDeveloperRepositorySpy } from "@/tests/data/mocks"
import { throwError } from "@/tests/domain/mocks"

const mockDeveloperParams = (): any => ({
  params: {
    id: faker.datatype.uuid()
  }
})

type SutTypes = {
    sut: DbListOneDeveloper
    listOneDeveloperRepositorySpy: ListOneDeveloperRepositorySpy
} 

const makeSut = (): SutTypes => {
    const listOneDeveloperRepositorySpy = new ListOneDeveloperRepositorySpy()
    const sut = new DbListOneDeveloper(listOneDeveloperRepositorySpy)
    return {
        sut,
        listOneDeveloperRepositorySpy
    }
}

describe('DbListOneDeveloper Usecase', () => {
  it('Should call ListOneDeveloperRepository with correct params', async () => {
    const { sut, listOneDeveloperRepositorySpy } = makeSut()
    const developerData = mockDeveloperParams()
    await sut.listOne(developerData)
    expect(listOneDeveloperRepositorySpy.listOneDeveloperParams).toBe(developerData)
  })

  it('Should throw if ListOneDeveloperRepository throws', async () => {
    const { sut, listOneDeveloperRepositorySpy } = makeSut()
    jest.spyOn(listOneDeveloperRepositorySpy, 'listOne').mockImplementationOnce(throwError)
    const developerData = mockDeveloperParams()
    const promise = sut.listOne(developerData)
    await expect(promise).rejects.toThrow()
  })

  it('Should return an developer on success', async () => {
    const { sut, listOneDeveloperRepositorySpy } = makeSut()
    const developerData = mockDeveloperParams()
    sut.listOne(developerData)
    expect(listOneDeveloperRepositorySpy.developer).toBeTruthy()
  })
})
