import { Address } from "../Address/Address";

export type Author = {    
    firstName: string;
    secondName: string;
    firstSurname: string; 
    secondSurname: string; 
    email: string;
    dateOfBirth: Date;  
    urlAutorPhoto: string;
    address: {
        id:number
    }
}