import { CreateGenreDTO } from "src/Controllers/Genre/DTO/createGenre.dto";
import { Genre } from 'src/Shared/Domain/Genre/Genre'

export class GenreMap{
    constructor(){}

    public static create(create:CreateGenreDTO){
        const genre:Genre = {
            name: create.name,
        }

        return genre
    }
}