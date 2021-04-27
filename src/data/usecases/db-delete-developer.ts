import { DeleteDeveloper } from '@/domain/usecases';
import { DeleteDeveloperRepository } from '@/data/protocols';

export class DbDeleteDeveloper implements DeleteDeveloper {
    constructor(
        private readonly deleteDeveloperRepository: DeleteDeveloperRepository
    ){}

    async delete(params: DeleteDeveloper.Params): Promise<DeleteDeveloper.Result>{
        const developers = await this.deleteDeveloperRepository.delete(params)
        return developers
    }
}