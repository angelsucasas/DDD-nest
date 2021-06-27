import { BaseAbstractRepository } from 'src/Shared/Base/Repository/Abstract.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../Author.entity';
import { AuthorRepositoryInterface } from './repository.interface';

@Injectable()
export class AuthorRepository
  extends BaseAbstractRepository<Author>
  implements AuthorRepositoryInterface
{
  constructor(
    @InjectRepository(Author)
    private readonly AuthorRepository: Repository<Author>,
  ) {
    super(AuthorRepository);
  }
}
