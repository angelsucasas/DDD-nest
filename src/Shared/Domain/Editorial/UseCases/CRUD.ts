import { Injectable, Inject } from '@nestjs/common';
import { EditorialRepository } from 'src/Shared/Entity/Editorial/Repository/Repository';
import { Editorial } from '../Editorial';

const AddesRepo = () => Inject('AddesRepo');

@Injectable()
export class EditorialCRUD {
	constructor(
		@AddesRepo() private readonly editorialRepository: EditorialRepository,
	) {}

	public async Create(editorial:Editorial): Promise<Editorial> {
		return await this.editorialRepository.create(editorial);
	}
    
    public async GetAll(): Promise<Editorial[]> {
		return await this.editorialRepository.findAll();
	}

	public async findById(id:number):Promise<Editorial>{
		return await this.editorialRepository.findOneById(id)
	}
}
