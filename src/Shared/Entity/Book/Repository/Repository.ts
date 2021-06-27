import { BaseAbstractRepository } from 'src/Shared/Base/Repository/Abstract.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../Book.entity';
import { BookRepositoryInterface } from './repository.interface';

@Injectable()
export class BookRepository
  extends BaseAbstractRepository<Book>
  implements BookRepositoryInterface
{
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {
    super(bookRepository);
  }
}
