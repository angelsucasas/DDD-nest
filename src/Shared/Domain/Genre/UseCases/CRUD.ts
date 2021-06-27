import { Injectable, Inject } from '@nestjs/common';
import { GenreRepository } from 'src/Shared/Entity/Genre/Repository/Repository';
import { Genre } from '../Genre';

const AddesRepo = () => Inject('AddesRepo');

@Injectable()
export class GenreCRUD {
	constructor(
		@AddesRepo() private readonly genreRepository: GenreRepository,
	) {}

    public async Create(genre:Genre): Promise<any> {
		return await this.genreRepository.create(genre);
	}

	public async GetAll(): Promise<Genre[]> {
		return await this.genreRepository.findAll();
	}

}
