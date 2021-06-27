import { CreateAuthorDTO } from "src/Controllers/Author/DTO/createAuthor.dto";
import { Author } from 'src/Shared/Domain/Author/Author'

export class AuthorMap{
    constructor(){}

    public static create(create:CreateAuthorDTO){
        const author:Author = {
            firstName: create.firstName,
            secondName: create.secondName,
            firstSurname: create.firstSurname, 
            secondSurname: create.secondSurname,
            email: create.email,
            dateOfBirth: create.dateOfBirth,
            urlAutorPhoto: create.urlAutorPhoto,
            address:{
                id: create.address.id
            }
        }

        return author
    }
}