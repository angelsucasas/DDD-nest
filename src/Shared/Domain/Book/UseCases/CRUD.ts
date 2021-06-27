import { Injectable, Inject } from '@nestjs/common';
import { BookRepository } from 'src/Shared/Entity/Book/Repository/Repository';
import { EditorialCRUD } from '../../Editorial/UseCases/CRUD';
import { Book } from '../Book';

const AddesRepo = () => Inject('AddesRepo');

@Injectable()
export class BookCRUD {
	constructor(
		@AddesRepo() 
		private readonly bookRepository: BookRepository,
		@Inject(EditorialCRUD)
		private readonly editorialCRUD: EditorialCRUD,
	) {}

	public async Create(book:Book): Promise<any> {
		//este es el plato fuerte
		//al registrar el libro
		//ademas de los datos del libro, tengo que decirte el autor y la editorial
		//pero solo te dire las editoriales y autores que esten previamente registradas
		//tambien hay que agregar los generos

		//PERO ANTES DE TODO ESO, VERIFICA SI LA EDITORIAL PUEDE TENER MAS LIBROS!!!
		return await this.bookRepository.create(book);
	}
    
    public async GetAll(): Promise<Book[]> {
		return await this.bookRepository.findAll();
	}
}
