import { CreateEditorialDTO } from "src/Controllers/Editorial/DTO/createEditorial.dto";
import { Editorial } from 'src/Shared/Domain/Editorial/Editorial'

export class EditorialMap{
    constructor(){}

    public static create(create:CreateEditorialDTO){
        const editorial:Editorial = {
            name: create.name,
            phoneNumber: create.phoneNumber,
            email: create.email,
            maxBooksAllow: create.maxBooksAllow,
            address:{
                id:create.address.id
            }
        }

        return editorial
    }
}