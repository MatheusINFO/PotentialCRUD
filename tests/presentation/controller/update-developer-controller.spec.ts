import faker from 'faker'
import { throwError } from '@/tests/domain/mocks'
import { UpdateDeveloperController } from '@/presentation/controller'
import { UpdateDeveloperSpy } from '@/tests/presentation/mocks'
import { badRequest, success } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'

const mockRequest = (): any => ({
  params: {
    id: faker.datatype.uuid()
  },
  body: {
    nome: faker.name.findName()
  }
})

const mockInvalidRequest = (sexo: any): any => ({
  params: {
    id: faker.datatype.uuid()
  },
  body: {
    nome: faker.name.findName(),
    idade: faker.datatype.number(),
    sexo,
    hobby: faker.random.word(),
    datanascimento: faker.date.recent()
  }
})

type SutTypes = {
  sut: UpdateDeveloperController
  updateDeveloperSpy: UpdateDeveloperSpy
}

const makeSut = (): SutTypes => {
  const updateDeveloperSpy = new UpdateDeveloperSpy()
  const sut = new UpdateDeveloperController(updateDeveloperSpy)
  return {
    sut,
    updateDeveloperSpy
  }
}

describe('UpdateDeveloper Controller', () => {
  it('Should call UpdateDeveloper with correct params', async () => {
    const { sut, updateDeveloperSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(updateDeveloperSpy.updateDeveloperParams).toEqual({
      id: request.params.id,
      developer: request.body
    })
  })

  it('Should return 400 if UpdateDeveloper throws', async () => {
    const { sut, updateDeveloperSpy } = makeSut()
    jest.spyOn(updateDeveloperSpy, 'update').mockImplementationOnce(throwError)
    const request = mockRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  it('Should return 400 if UpdateDeveloper without invalid field sexo', async () => {
    const { sut, updateDeveloperSpy } = makeSut()
    jest.spyOn(updateDeveloperSpy, 'update').mockImplementationOnce(throwError)
    const request = mockInvalidRequest('Alien')
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(badRequest(new InvalidParamError('sexo')))
  })

  it('Should return 200 on success', async () => {
    const { sut, updateDeveloperSpy } = makeSut()
    const request = mockRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(success(updateDeveloperSpy.developer))
  })
})
