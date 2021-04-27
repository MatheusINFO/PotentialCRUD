import { ObjectId } from 'bson'
import { MongoHelper } from './mongo-helper'
import {
  AddDeveloperRepository,
  DeleteDeveloperRepository,
  ListAllDevelopersRepository ,
  ListOneDeveloperRepository,
  UpdateDeveloperRepository
} from '@/data/protocols'

export class DeveloperRepository implements
  AddDeveloperRepository,
  ListAllDevelopersRepository,
  ListOneDeveloperRepository,
  DeleteDeveloperRepository,
  UpdateDeveloperRepository {
  async add (params: AddDeveloperRepository.Params): Promise<AddDeveloperRepository.Result> {
    const collection = await MongoHelper.findCollection('developers')
    const result = await collection.insertOne(params)
    const developer = await MongoHelper.map(result.ops[0])
    return developer
  }

  async listAll (params?: ListAllDevelopersRepository.Params): Promise<ListAllDevelopersRepository.Result> {
    // Paginação de acordo com a querystring
    const page = params.page
    const pagination = page ? {
      limit: 5,
      skip: (page - 1) * 5
    } : ''
    const queryParams = params
    delete queryParams?.page

    const collection = await MongoHelper.findCollection('developers')
    const result = await collection.find(queryParams, pagination).toArray()
    const total = await collection.estimatedDocumentCount()
    const developers = result ? await MongoHelper.mapCollection(result) : []
    developers.push({
      total: total,
      page: page || 1
    })
    return developers
  }

  async listOne (params: ListOneDeveloperRepository.Params): Promise<ListOneDeveloperRepository.Result> {
    const collection = await MongoHelper.findCollection('developers')
    const result = await collection.findOne({ _id: new ObjectId(params.id) })
    const developer = result ? await MongoHelper.map(result) : []
    return developer
  }

  async delete (params: DeleteDeveloperRepository.Params): Promise<DeleteDeveloperRepository.Result> {
    const collection = await MongoHelper.findCollection('developers')
    const result = await collection.findOneAndDelete({ _id: new ObjectId(params.id) })
    const developer = result.value ? await MongoHelper.map(result.value) : []
    return developer
  }

  async update (params: UpdateDeveloperRepository.Params): Promise<UpdateDeveloperRepository.Result> {
    const collection = await MongoHelper.findCollection('developers')
    const result = await collection.findOneAndUpdate({ _id: new ObjectId(params.id) }, {
      $set: params.developer
    }, {
      returnOriginal: false
    })
    return result.value && await MongoHelper.map(result.value)
  }
}
