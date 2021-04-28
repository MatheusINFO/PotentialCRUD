import faker from 'faker'
import { DbUpateDeveloper } from "@/data/usecases"
import { UpdateDeveloperRepositorySpy } from "@/tests/data/mocks"
import { throwError } from "@/tests/domain/mocks"

const mockDeveloperParams = (): any => ({
  params: {
    id: faker.datatype.uuid()
  },
  body: {
    nome: faker.name.findName()
  }
})

type SutTypes = {
    sut: DbUpateDeveloper
    updateDeveloperRepositorySpy: UpdateDeveloperRepositorySpy
} 

const makeSut = (): SutTypes => {
    const updateDeveloperRepositorySpy = new UpdateDeveloperRepositorySpy()
    const sut = new DbUpateDeveloper(updateDeveloperRepositorySpy)
    return {
        sut,
        updateDeveloperRepositorySpy
    }
}

describe('DbUpdateDeveloper Usecase', () => {
  it('Should call UpdateDeveloperRepository with correct params', async () => {
    const { sut, updateDeveloperRepositorySpy } = makeSut()
    const developerData = mockDeveloperParams()
    await sut.update(developerData)
    expect(updateDeveloperRepositorySpy.updateDeveloperParams).toBe(developerData)
  })

  it('Should throw if UpdateDeveloperRepository throws', async () => {
    const { sut, updateDeveloperRepositorySpy } = makeSut()
    jest.spyOn(updateDeveloperRepositorySpy, 'update').mockImplementationOnce(throwError)
    const developerData = mockDeveloperParams()
    const promise = sut.update(developerData)
    await expect(promise).rejects.toThrow()
  })

  it('Should return an developer on success', async () => {
    const { sut, updateDeveloperRepositorySpy } = makeSut()
    const developerData = mockDeveloperParams()
    sut.update(developerData)
    expect(updateDeveloperRepositorySpy.developer).toBeTruthy()
  })
})
