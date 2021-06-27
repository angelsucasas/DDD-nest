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
import { AuthorCRUD } from 'src/Shared/Domain/Author/UseCases/CRUD';
import { AuthorMap } from 'src/Utils/Mappers/Author/AuthorMapper';
import { CreateAuthorDTO } from './DTO/createAuthor.dto';


@Controller('author')
export class AuthorController {
    constructor(
        private readonly authorCRUD: AuthorCRUD
    ){}

    @Post('')
    async createAuthorAPI(
        @Body() createAuthorDto: CreateAuthorDTO,
        @Res() res: Response,
    ){
        await  this.authorCRUD.Create(AuthorMap.create(createAuthorDto));
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
    async getAuthorById(
        @Param('id') id: number,
        @Res() res: Response,
    ): Promise<any> {
        return await this.authorCRUD.GetAll()
    }
}
