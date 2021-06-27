import { Column, CreateDateColumn, JoinColumn, OneToMany, PrimaryGeneratedColumn, Entity } from "typeorm";
import { PrimalEntity } from '../../Base/Entity/Base.entity'

@Entity('address')
export class Address extends PrimalEntity{
    @Column({name:'description', type:'text', nullable:false})
    name: string;

    @OneToMany(
        type =>Address,
        address => address.addresses
    )
    addresses: Address[]
}