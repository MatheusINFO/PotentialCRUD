import faker from 'faker'
import { SexoModel, throwError } from '@/tests/domain/mocks'
import { AddDeveloperController } from '@/presentation/controller'
import { AddDeveloperSpy } from '@/tests/presentation/mocks'
import { badRequest, created } from '@/presentation/helpers'
import { InvalidParamError, MissingParamError } from '@/presentation/errors'

const mockRequest = (): any => ({
  body: {
    nome: faker.name.findName(),
    idade: faker.datatype.number(),
    sexo: SexoModel.MASCULINO,
    hobby: faker.random.word(),
    datanascimento: faker.date.recent()
  }
})

const mockInvalidRequest = (nome, sexo): any => ({
  body: {
    nome,
    idade: faker.datatype.number(),
    sexo,
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

  it('Should return 400 if AddDeveloper with invalid field nome', async () => {
    const { sut, addDeveloperSpy } = makeSut()
    jest.spyOn(addDeveloperSpy, 'add').mockImplementationOnce(throwError)
    const request = mockInvalidRequest('', SexoModel.MASCULINO)
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('nome')))
  })

  it('Should return 400 if AddDeveloper with invalid sexo field', async () => {
    const { sut, addDeveloperSpy } = makeSut()
    jest.spyOn(addDeveloperSpy, 'add').mockImplementationOnce(throwError)
    const request = mockInvalidRequest('Matheus', 'Alien')
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(badRequest(new InvalidParamError('sexo')))
  })

  it('Should return 201 on success', async () => {
    const { sut, addDeveloperSpy } = makeSut()
    const request = mockRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(created(addDeveloperSpy.developer))
  })
})
