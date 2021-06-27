import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditorialAuthor } from '../editorial-author.entity';
import { Editorial } from '../editorial.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([Editorial,EditorialAuthor])
    ]
})
export class EditorialRepositoryModule {}
