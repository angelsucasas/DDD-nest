import { 
    Controller,
    Get,
    Post,
    Res,
    Body,
    Delete,
    Param
} from '@nestjs/common';
import { Response } from 'express';
import { AddressCRUD } from 'src/Shared/Domain/Address/UseCases/CRUD';
import { AddressMap } from 'src/Utils/Mappers/Address/AddressMapper';
import { CreateAddressDTO } from './DTO/createAddress.dto';


@Controller('address')
export class AddressController {
    constructor(
        private readonly addressCRUD: AddressCRUD,
    ){}

    @Post('')
    async createEmployee(
        @Body() createAddressDto: CreateAddressDTO,
        @Res() res: Response,
    ){
        await  this.addressCRUD.Create(AddressMap.create(createAddressDto));
    }

    /*@Delete('')
    async deleteEmployee(
        @Body() accountDto:AccountDeleteDto,
        @Res() res: Response,
    ): Promise<any> {
        return await this.accountService.delete(accountDto.id,res)
    }

    @Get('')
    async getEmployee(
        @Res() res: Response,
    ): Promise<any> {
        return await this.accountService.get(res)
    }*/

    @Get(':id')
    async getAddressById(
        @Param('id') id: number,
        @Res() res: Response,
    ): Promise<any> {
        return await this.addressCRUD.GetById(id)
    }
}
