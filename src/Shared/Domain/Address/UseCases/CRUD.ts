import { Injectable, Inject } from '@nestjs/common';
import { AddressRepository } from 'src/Shared/Entity/Address/Repository/Repository';
import { Address } from '../Address';

const AddesRepo = () => Inject('AddesRepo');

@Injectable()
export class AddressCRUD {
	constructor(
		@AddesRepo() private readonly addressRepository: AddressRepository,
	) {}

	public async Create(address:Address): Promise<any> {
		return await this.addressRepository.create(address);
	}
    
    public async GetById(AddressId:number): Promise<any> {
		return await this.addressRepository.findOneById(AddressId);
	}
}
