import faker from 'faker'
import { SexoModel, throwError } from '@/tests/domain/mocks'
import { AddDeveloperController } from '@/presentation/controller'
import { AddDeveloperSpy } from '@/tests/presentation/mocks'
import { badRequest, created } from '@/presentation/helpers'

const mockRequest = (): any => ({
  body: {
    nome: faker.name.findName(),
    idade: faker.datatype.number(),
    sexo: SexoModel.MASCULINO,
    hobby: faker.random.word(),
    datanascimento: faker.date.recent()
  }
})

type SutTypes = {
  sut: AddDeveloperController
  addDeveloperSpy: AddDeveloperSpy
}

const makeSut = (): SutTypes => {
  const addDeveloperSpy = new AddDeveloperSpy()
  const sut = new AddDeveloperController(addDeveloperSpy)
  return {
    sut,
    addDeveloperSpy
  }
}

describe('AddDeveloper Controller', () => {
  it('Should call AddDeveloper with correct params', async () => {
    const { sut, addDeveloperSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(addDeveloperSpy.addDeveloperParams).toEqual(request.body)
  })

  it('Should return 400 if AddDeveloper throws', async () => {
    const { sut, addDeveloperSpy } = makeSut()
    jest.spyOn(addDeveloperSpy, 'add').mockImplementationOnce(throwError)
    const request = mockRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  it('Should return 201 on success', async () => {
    const { sut, addDeveloperSpy } = makeSut()
    const request = mockRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(created(addDeveloperSpy.developer))
  })
})
