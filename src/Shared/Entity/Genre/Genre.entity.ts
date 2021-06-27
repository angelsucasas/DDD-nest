import { Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";
import { PrimalEntity } from '../../Base/Entity/Base.entity'
import { Address } from "../Address/Address.entity";

@Entity('genre')
export class Genre extends PrimalEntity{
    @Column({name:'name', type:'text', nullable:false})
    name: string;
}