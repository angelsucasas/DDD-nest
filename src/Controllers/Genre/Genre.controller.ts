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
import { GenreCRUD } from 'src/Shared/Domain/Genre/UseCases/CRUD';
import { GenreMap } from 'src/Utils/Mappers/Genre/GenreMapper';
import { CreateGenreDTO } from './DTO/createGenre.dto';


@Controller('Genre')
export class GenreController {
    constructor(
        private readonly genreCRUD: GenreCRUD
    ){}

    @Post('')
    async createGenre(
        @Body() createGenreDto: CreateGenreDTO,
        @Res() res: Response,
    ){
        await  this.genreCRUD.Create(GenreMap.create(createGenreDto));
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
    async getGenreById(
        @Param('id') id: number,
        @Res() res: Response,
    ): Promise<any> {
        return await this.genreCRUD.GetAll()
    }
}
