import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from '../Genre.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([Genre])
    ]
})
export class GenreRepositoryModule {}
