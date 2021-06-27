import { IsString, IsNotEmpty, IsDate  } from "class-validator";

export class CreateAuthorDTO {
    @IsString()
    @IsNotEmpty() 
    firstName: string;

    secondName: string;

    firstSurname: string; 
    
    secondSurname: string;

    @IsString()
    @IsNotEmpty() 
    email: string;

    @IsDate()
    dateOfBirth: Date;

    @IsString()
    urlAutorPhoto: string;

    @IsNotEmpty() 
    address:{
        id:number;
    }
}