import { BaseAbstractRepository } from 'src/Shared/Base/Repository/Abstract.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Editorial } from '../Editorial.entity';
import { EditorialRepositoryInterface } from './repository.interface';

@Injectable()
export class EditorialRepository
  extends BaseAbstractRepository<Editorial>
  implements EditorialRepositoryInterface
{
  constructor(
    @InjectRepository(Editorial)
    private readonly editorialRepository: Repository<Editorial>,
  ) {
    super(editorialRepository);
  }
}
