import { UpdateDeveloper } from '@/domain/usecases';
import {  UpdateDeveloperRepository } from '@/data/protocols';

export class DbUpateDeveloper implements UpdateDeveloper {
    constructor(
        private readonly updateDeveloperRepository: UpdateDeveloperRepository
    ){}

    async update(params: UpdateDeveloper.Params): Promise<UpdateDeveloper.Result> {
        const developers = await this.updateDeveloperRepository.update(params)
        return developers
    }
}