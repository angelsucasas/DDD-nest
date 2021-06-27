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
import { EditorialCRUD } from 'src/Shared/Domain/Editorial/UseCases/CRUD';
import { EditorialMap } from 'src/Utils/Mappers/Editorial/EditorialMapper';
import { CreateEditorialDTO } from './DTO/createEditorial.dto';


@Controller('editorial')
export class EditorialController {
    constructor(
        private readonly editorialCRUD: EditorialCRUD
    ){}

    @Post('')
    async createEditorial(
        @Body() createEditorialDto: CreateEditorialDTO,
        @Res() res: Response,
    ){
        await  this.editorialCRUD.Create(EditorialMap.create(createEditorialDto));
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
    async getEditorialById(
        @Param('id') id: number,
        @Res() res: Response,
    ): Promise<any> {
        return await this.editorialCRUD.GetAll()
    }
}
