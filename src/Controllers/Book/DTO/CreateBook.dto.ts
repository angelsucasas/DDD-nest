import { IsString, IsNotEmpty, IsDate, IsAlphanumeric  } from "class-validator";

export class CreateBookDTO {
    @IsString()
    @IsNotEmpty() 
    title: string;

    @IsAlphanumeric()
    @IsNotEmpty() 
    numberOfPages: number;

    @IsString()
    urlCoverPageImage: string;

    @IsDate()
    publishDate: Date;
}