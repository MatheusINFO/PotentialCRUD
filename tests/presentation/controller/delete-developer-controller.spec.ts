import faker from 'faker'
import { throwError } from '@/tests/domain/mocks'
import { DeleteDeveloperController } from '@/presentation/controller'
import { DeleteDeveloperSpy } from '@/tests/presentation/mocks'
import { badRequest, noContent } from '@/presentation/helpers'

const mockRequest = (): any => ({
  params: {
    id: faker.datatype.uuid()
  }
})

type SutTypes = {
  sut: DeleteDeveloperController
  deleteDeveloperSpy: DeleteDeveloperSpy
}

const makeSut = (): SutTypes => {
  const deleteDeveloperSpy = new DeleteDeveloperSpy()
  const sut = new DeleteDeveloperController(deleteDeveloperSpy)
  return {
    sut,
    deleteDeveloperSpy
  }
}

describe('DeleteDeveloper Controller', () => {
  it('Should call DeleteDeveloper with correct params', async () => {
    const { sut, deleteDeveloperSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(deleteDeveloperSpy.deleteDeveloperParams).toEqual(request.params)
  })

  it('Should return 400 if DeleteDeveloper throws', async () => {
    const { sut, deleteDeveloperSpy } = makeSut()
    jest.spyOn(deleteDeveloperSpy, 'delete').mockImplementationOnce(throwError)
    const request = mockRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  it('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const request = mockRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(noContent())
  })
})
