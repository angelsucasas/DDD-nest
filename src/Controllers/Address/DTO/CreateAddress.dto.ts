import { IsString,IsNotEmpty } from "class-validator";

export class CreateAddressDTO {
    @IsString()
    @IsNotEmpty()
    readonly name:string;
    readonly address:{
        id:number
    }
}