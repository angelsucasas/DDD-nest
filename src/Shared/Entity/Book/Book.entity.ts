import { Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";
import { PrimalEntity } from '../../Base/Entity/Base.entity'

@Entity('book')
export class Book extends PrimalEntity{
    @Column({name:'title', type:'text', nullable:false})
    title: string;

    @Column({name:'number_of_pages', type:'int', nullable:false})
    numberOfPages: number;

    @Column({name:'url_cover_page_image', type:'text', nullable:true})
    urlCoverPageImage: string;

    @CreateDateColumn({name:'publish_date', nullable:true})
    publishDate: Date;
}