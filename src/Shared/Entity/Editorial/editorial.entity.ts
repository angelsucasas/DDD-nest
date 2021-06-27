import { Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";
import { PrimalEntity } from '../../Base/Entity/Base.entity'
import { Address } from "../Address/Address.entity";

@Entity('editorial')
export class Editorial extends PrimalEntity{
    @Column({name:'name', type:'text', nullable:false})
    name: string;

    @Column({name:'phone_number', type:'text', nullable:true})
    phoneNumber: string;

    @Column({name:'email', type:'text', nullable:false})
    email: string;

    @Column({name:'max_books_allow', type:'int', nullable:false})
    maxBooksAllow: number;

    @ManyToOne(
        type =>Address,
        address => address.id
    )
    address: Address
}