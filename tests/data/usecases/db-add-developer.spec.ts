import { DbAddDeveloper } from "@/data/usecases"
import { AddDeveloperRepositorySpy } from "@/tests/data/mocks"
import { mockDeveloperParams, throwError } from "@/tests/domain/mocks"

type SutTypes = {
    sut: DbAddDeveloper
    addDeveloperRepositorySpy: AddDeveloperRepositorySpy
} 

const makeSut = (): SutTypes => {
    const addDeveloperRepositorySpy = new AddDeveloperRepositorySpy()
    const sut = new DbAddDeveloper(addDeveloperRepositorySpy)
    return {
        sut,
        addDeveloperRepositorySpy
    }
}

describe('DbAddDeveloper Usecase', () => {
  it('Should call AddDeveloperRepository with correct params', async () => {
    const { sut, addDeveloperRepositorySpy } = makeSut()
    const developerData = mockDeveloperParams()
    await sut.add(developerData)
    expect(addDeveloperRepositorySpy.addDeveloperParams).toBe(developerData)
  })

  it('Should throw if AddDeveloperRepository throws', async () => {
    const { sut, addDeveloperRepositorySpy } = makeSut()
    jest.spyOn(addDeveloperRepositorySpy, 'add').mockImplementationOnce(throwError)
    const developerData = mockDeveloperParams()
    const promise = sut.add(developerData)
    await expect(promise).rejects.toThrow()
  })

  it('Should return an developer on success', async () => {
    const { sut, addDeveloperRepositorySpy } = makeSut()
    const developerData = mockDeveloperParams()
    await sut.add(developerData)
    expect(addDeveloperRepositorySpy.developer).toBeTruthy()
  })
})