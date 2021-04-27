import { ListAllDevelopers } from '@/domain/usecases';
import { ListAllDevelopersRepository } from '@/data/protocols'

export class DbListAllDevelopers implements ListAllDevelopers {
    constructor(
        private readonly listAllDevelopersRepository: ListAllDevelopersRepository
    ){}

    async listAll(params?: ListAllDevelopersRepository.Params): Promise<ListAllDevelopers.Result>{
        const developers = await this.listAllDevelopersRepository.listAll(params)
        return developers
    }
}