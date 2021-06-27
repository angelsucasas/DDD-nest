import { Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";
import { PrimalEntity } from '../../Base/Entity/Base.entity'
import { Address } from "../Address/Address.entity";

@Entity('author')
export class Author extends PrimalEntity{
    @Column({name:'first_name', type:'text', nullable:false})
    firstName: string;

    @Column({name:'second_name', type:'text', nullable:true})
    secondName: string;

    @Column({name:'first_surname', type:'text', nullable:false})
    firstSurname: string;

    @Column({name:'second_surname', type:'text', nullable:true})
    secondSurname: string;

    @Column({name:'email', type:'text', nullable:false})
    email: string;

    @CreateDateColumn({name:'dateOfBirth', nullable:true})
    dateOfBirth: Date;

    @Column({name:'url_autor_photo', type:'text', nullable:false})
    urlAutorPhoto: string;

    @ManyToOne(
        type =>Address,
        address => address.id
    )
    address: Address
}