import faker from 'faker'
import { throwError } from '@/tests/domain/mocks'
import { ListOneDeveloperController } from '@/presentation/controller'
import { ListOneDeveloperSpy } from '@/tests/presentation/mocks'
import { notFound, success } from '@/presentation/helpers'

const mockRequest = (): any => ({
  params: {
    id: faker.datatype.uuid()
  }
})

type SutTypes = {
  sut: ListOneDeveloperController
  listOneDeveloperSpy: ListOneDeveloperSpy
}

const makeSut = (): SutTypes => {
  const listOneDeveloperSpy = new ListOneDeveloperSpy()
  const sut = new ListOneDeveloperController(listOneDeveloperSpy)
  return {
    sut,
    listOneDeveloperSpy
  }
}

describe('ListOneDeveloper Controller', () => {
  it('Should call ListOneDeveloper with correct params', async () => {
    const { sut, listOneDeveloperSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(listOneDeveloperSpy.listDeveloperParams).toEqual(request.params)
  })

  it('Should return 404 if AddDeveloper throws', async () => {
    const { sut, listOneDeveloperSpy } = makeSut()
    jest.spyOn(listOneDeveloperSpy, 'listOne').mockImplementationOnce(throwError)
    const request = mockRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(notFound(new Error()))
  })

  it('Should return 201 on success', async () => {
    const { sut, listOneDeveloperSpy } = makeSut()
    const request = mockRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(success(listOneDeveloperSpy.developer))
  })
})
