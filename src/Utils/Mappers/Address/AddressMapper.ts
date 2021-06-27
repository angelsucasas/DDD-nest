import { CreateAddressDTO } from "src/Controllers/Address/DTO/createAddress.dto";
import { Address } from 'src/Shared/Domain/Address/Address'

export class AddressMap{
    constructor(){}

    public static create(create:CreateAddressDTO){
        const address:Address = {
            name:create.name ?? undefined,
            address:{
                id:create.address.id
            }
        }

        return address
    }
}