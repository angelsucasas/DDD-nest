import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEditorialBook } from '../Author-editorial-book.entity';
import { BookGenre } from '../Book-genre.entity';
import { Book } from '../Book.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([Book,BookGenre,AuthorEditorialBook])
    ]
})
export class BookRepositoryModule {}
