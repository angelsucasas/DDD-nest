import { Injectable, Inject } from '@nestjs/common';
import { AuthorRepository } from 'src/Shared/Entity/Author/Repository/Repository';
import { Author } from '../Author';

const AddesRepo = () => Inject('AddesRepo');

@Injectable()
export class AuthorCRUD {
	constructor(
		@AddesRepo() private readonly authorRepository: AuthorRepository,
	) {}

	public async Create(author:Author): Promise<Author> {
		return await this.authorRepository.create(author);
	}

    public async GetAll(): Promise<Author[]> {
		return await this.authorRepository.findAll();
	}
}
