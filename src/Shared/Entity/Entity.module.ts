import { Module } from '@nestjs/common';
import { AddressRepositoryModule } from './Address/Address-repository/Address-repository.module';
import { AuthorRepositoryModule } from './Author/Author-repository/Author-repository.module';
import { BookRepositoryModule } from './Book/Book-repository/book-repository.module';
import { EditorialRepositoryModule } from './Editorial/editorial-repository/editorial-repository.module';
import { GenreRepositoryModule } from './Genre/Genre-repository/Genre-repository.module';

@Module({
    imports:[
        AddressRepositoryModule,
        AuthorRepositoryModule,
        BookRepositoryModule,
        EditorialRepositoryModule,
        GenreRepositoryModule
    ],
    exports:[
        AddressRepositoryModule,
        AuthorRepositoryModule,
        BookRepositoryModule,
        EditorialRepositoryModule,
        GenreRepositoryModule
    ]
})
export class EntityModule {}
