import { ListOneDeveloper } from '@/domain/usecases';
import { ListOneDeveloperRepository } from '@/data/protocols';

export class DbListOneDeveloper implements ListOneDeveloper {
    constructor(
        private readonly listOneDeveloperRepository: ListOneDeveloperRepository
    ){}

    async listOne(params: ListOneDeveloperRepository.Params): Promise<ListOneDeveloperRepository.Result>{
        const developers = await this.listOneDeveloperRepository.listOne(params)
        return developers
    }
}