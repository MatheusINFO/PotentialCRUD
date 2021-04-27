import { AddDeveloper } from '@/domain/usecases';
import { AddDeveloperRepository } from '@/data/protocols'

export class DbAddDeveloper implements AddDeveloper {
    constructor(
        private readonly addDeveloperRepository: AddDeveloperRepository
    ){}

    async add(params: AddDeveloper.Params): Promise<AddDeveloper.Result>{
        const developer = await this.addDeveloperRepository.add(params)
        return developer
    }
}