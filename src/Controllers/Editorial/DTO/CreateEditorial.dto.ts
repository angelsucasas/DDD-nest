import { IsString, IsNotEmpty, IsAlphanumeric  } from "class-validator";

export class CreateEditorialDTO {
    @IsString()
    @IsNotEmpty() 
    name: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsAlphanumeric()
    @IsNotEmpty() 
    maxBooksAllow: number;

    address:{
        id:number;
    }
}