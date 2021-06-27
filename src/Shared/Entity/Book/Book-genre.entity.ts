import { Entity, ManyToOne } from "typeorm";
import { PrimalEntity } from '../../Base/Entity/Base.entity'
import { Genre } from "../Genre/Genre.entity";
import { Book } from "./Book.entity";

@Entity('Book_genre')
export class BookGenre extends PrimalEntity{

    @ManyToOne(
        type =>Book,
        book => book.id
    )
    book: Book

    @ManyToOne(
        type =>Genre,
        genre => genre.id
    )
    genre: Genre
}