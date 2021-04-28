import { throwError } from '@/tests/domain/mocks'
import { ListAllDevelopersController } from '@/presentation/controller'
import { ListAllDevelopersSpy } from '@/tests/presentation/mocks'
import { badRequest, success } from '@/presentation/helpers'

const mockRequest = (): any => ({
  query: {}
})

type SutTypes = {
  sut: ListAllDevelopersController
  listAllDevelopersSpy: ListAllDevelopersSpy
}

const makeSut = (): SutTypes => {
  const listAllDevelopersSpy = new ListAllDevelopersSpy()
  const sut = new ListAllDevelopersController(listAllDevelopersSpy)
  return {
    sut,
    listAllDevelopersSpy
  }
}

describe('ListAllDevelopers Controller', () => {
  it('Should call ListAllDevelopers with correct params', async () => {
    const { sut, listAllDevelopersSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(listAllDevelopersSpy.listAllDevelopersParams).toEqual(request.query)
  })

  it('Should return 404 if ListAllDevelopers throws', async () => {
    const { sut, listAllDevelopersSpy } = makeSut()
    jest.spyOn(listAllDevelopersSpy, 'listAll').mockImplementationOnce(throwError)
    const request = mockRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  it('Should return 200 on success', async () => {
    const { sut, listAllDevelopersSpy } = makeSut()
    const request = mockRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(success(listAllDevelopersSpy.developer))
  })
})
