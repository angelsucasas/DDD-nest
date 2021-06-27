import { CreateBookDTO } from "src/Controllers/Book/DTO/createBook.dto";
import { Book } from 'src/Shared/Domain/Book/Book'

export class BookMap{
    constructor(){}

    public static create(create:CreateBookDTO){
        const book:Book = {
            title: create.title,
            numberOfPages: create.numberOfPages,
            urlCoverPageImage: create.urlCoverPageImage,
            publishDate: create.publishDate
        }

        return book
    }
}