import { DbListAllDevelopers } from "@/data/usecases"
import { ListAllDevelopersRepositorySpy } from "@/tests/data/mocks"
import { throwError } from "@/tests/domain/mocks"

const mockDeveloperParams = (): any => ({
  query: {}
})

type SutTypes = {
    sut: DbListAllDevelopers
    listAllDevelopersRepositorySpy: ListAllDevelopersRepositorySpy
} 

const makeSut = (): SutTypes => {
    const listAllDevelopersRepositorySpy = new ListAllDevelopersRepositorySpy()
    const sut = new DbListAllDevelopers(listAllDevelopersRepositorySpy)
    return {
        sut,
        listAllDevelopersRepositorySpy
    }
}

describe('DbListAllDevelopersRepository Usecase', () => {
  it('Should call ListAllDevelopersRepository with correct params', async () => {
    const { sut, listAllDevelopersRepositorySpy } = makeSut()
    const developerData = mockDeveloperParams()
    await sut.listAll(developerData)
    expect(listAllDevelopersRepositorySpy.listAllDevelopersParams).toBe(developerData)
  })

  it('Should throw if ListAllDevelopersRepository throws', async () => {
    const { sut, listAllDevelopersRepositorySpy } = makeSut()
    jest.spyOn(listAllDevelopersRepositorySpy, 'listAll').mockImplementationOnce(throwError)
    const developerData = mockDeveloperParams()
    const promise = sut.listAll(developerData)
    await expect(promise).rejects.toThrow()
  })

  it('Should return an array of developer on success', async () => {
    const { sut, listAllDevelopersRepositorySpy } = makeSut()
    const developerData = mockDeveloperParams()
    sut.listAll(developerData)
    expect(listAllDevelopersRepositorySpy.developer).toBeTruthy()
  })
})
