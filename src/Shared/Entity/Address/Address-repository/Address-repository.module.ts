import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../Address.entity';
import { AddressRepository } from '../Repository/Repository';

@Module({
    imports:[
        TypeOrmModule.forFeature([Address]),
    ]
})
export class AddressRepositoryModule {}
