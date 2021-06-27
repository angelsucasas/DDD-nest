import { BaseAbstractRepository } from 'src/Shared/Base/Repository/Abstract.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from '../Address.entity';
import { AddressRepositoryInterface } from './Repository.interface';

@Injectable()
export class AddressRepository
  extends BaseAbstractRepository<Address>
  implements AddressRepositoryInterface
{
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {
    super(addressRepository);
  }
}
