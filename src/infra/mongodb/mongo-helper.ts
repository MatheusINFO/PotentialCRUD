import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (url: string) {
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    await this.client.close()
  },

  findCollection (collectionName: string) {
    return this.client.db().collection(collectionName)
  },

  // Transformo o padrão do mongodb que é _id para retornar id
  map (collection: any): any {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  },

  mapCollection (collection: any[]): any {
    return collection.map(item => MongoHelper.map(item))
  }
}
