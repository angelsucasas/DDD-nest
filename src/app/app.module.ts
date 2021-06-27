import { Module } from '@nestjs/common';
import { AddressModule } from 'src/Shared/Domain/Address/Address.module';
import { AuthorModule } from 'src/Shared/Domain/Author/Author.module';
import { BookModule } from 'src/Shared/Domain/Book/Book.module';
import { EditorialModule } from 'src/Shared/Domain/Editorial/Editorial.module';
import { GenreModule } from 'src/Shared/Domain/Genre/Genre.module';
import { EntityModule } from 'src/Shared/Entity/Entity.module';
import { AddressRepositoryModule } from 'src/Shared/Entity/Address/Address-repository/Address-repository.module';
import { AuthorRepositoryModule } from 'src/Shared/Entity/Author/Author-repository/Author-repository.module';
import { BookRepositoryModule } from 'src/Shared/Entity/Book/Book-repository/book-repository.module';
import { EditorialRepositoryModule } from 'src/Shared/Entity/Editorial/editorial-repository/editorial-repository.module';
import { GenreRepositoryModule } from 'src/Shared/Entity/Genre/Genre-repository/Genre-repository.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';


@Module({
  imports: [
    AddressModule, 
    AuthorModule, 
    BookModule,
    EditorialModule,
    GenreModule,
    EntityModule,
    TypeOrmModule.forRoot(),
    WinstonModule
  ],
})
export class AppModule {}
