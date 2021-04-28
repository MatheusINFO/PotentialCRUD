import faker from 'faker'
import { DbDeleteDeveloper } from "@/data/usecases"
import { DeleteDeveloperRepositorySpy } from "@/tests/data/mocks"
import { throwError } from "@/tests/domain/mocks"

const mockDeveloperParams = (): any => ({
    params: {
      id: faker.datatype.uuid()
    }
  })

type SutTypes = {
    sut: DbDeleteDeveloper
    deleteDeveloperRepositorySpy: DeleteDeveloperRepositorySpy
} 

const makeSut = (): SutTypes => {
    const deleteDeveloperRepositorySpy = new DeleteDeveloperRepositorySpy()
    const sut = new DbDeleteDeveloper(deleteDeveloperRepositorySpy)
    return {
        sut,
        deleteDeveloperRepositorySpy
    }
}

describe('DbDeleteDeveloper Usecase', () => {
  it('Should call DeleteDeveloperRepository with correct params', async () => {
    const { sut, deleteDeveloperRepositorySpy } = makeSut()
    const developerData = mockDeveloperParams()
    await sut.delete(developerData)
    expect(deleteDeveloperRepositorySpy.deleteDeveloperParams).toBe(developerData)
  })

  it('Should throw if DeleteDeveloperRepository throws', async () => {
    const { sut, deleteDeveloperRepositorySpy } = makeSut()
    jest.spyOn(deleteDeveloperRepositorySpy, 'delete').mockImplementationOnce(throwError)
    const developerData = mockDeveloperParams()
    const promise = sut.delete(developerData)
    await expect(promise).rejects.toThrow()
  })

  it('Should return an null on success', async () => {
    const { sut, deleteDeveloperRepositorySpy } = makeSut()
    const developerData = mockDeveloperParams()
    await sut.delete(developerData)
    expect(deleteDeveloperRepositorySpy.developer).toBe(null)
  })
})
