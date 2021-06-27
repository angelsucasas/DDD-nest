import { BaseAbstractRepository } from 'src/Shared/Base/Repository/Abstract.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from '../Genre.entity';
import { GenreRepositoryInterface } from './repository.interface';

@Injectable()
export class GenreRepository
  extends BaseAbstractRepository<Genre>
  implements GenreRepositoryInterface
{
  constructor(
    @InjectRepository(Genre)
    private readonly GenreRepository: Repository<Genre>,
  ) {
    super(GenreRepository);
  }
}
