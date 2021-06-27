import { Entity, ManyToOne } from "typeorm";
import { PrimalEntity } from '../../Base/Entity/Base.entity'
import { EditorialAuthor } from "../Editorial/editorial-author.entity";
import { Book } from "./Book.entity";

@Entity('author_editorial_book')
export class AuthorEditorialBook extends PrimalEntity{
    @ManyToOne(
        type =>EditorialAuthor,
        editorialAuthor => editorialAuthor.id
    )
    editorialAuthor: EditorialAuthor

    @ManyToOne(
        type =>Book,
        book => book.id
    )
    book: Book
}