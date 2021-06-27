import { Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";
import { PrimalEntity } from '../../Base/Entity/Base.entity'
import { Address } from "../Address/Address.entity";
import { Author } from "../Author/author.entity";
import { Editorial } from "./editorial.entity";

@Entity('editorial_author')
export class EditorialAuthor extends PrimalEntity{

    @ManyToOne(
        type =>Editorial,
        editorial => editorial.id
    )
    editorial: Editorial

    @ManyToOne(
        type =>Author,
        author => author.id
    )
    author: Author
}