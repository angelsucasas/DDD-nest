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
import { BookCRUD } from 'src/Shared/Domain/Book/UseCases/CRUD';
import { BookMap } from 'src/Utils/Mappers/Book/BookMapper';
import { CreateBookDTO } from './DTO/createBook.dto';


@Controller('book')
export class BookController {
    constructor(
        private readonly bookCRUD: BookCRUD
    ){}

    @Post('')
    async createBook(
        @Body() createBookDto: CreateBookDTO,
        @Res() res: Response,
    ){
        await  this.bookCRUD.Create(BookMap.create(createBookDto));
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
    async getBookById(
        @Param('id') id: number,
        @Res() res: Response,
    ): Promise<any> {
        return await this.bookCRUD.GetAll()
    }
}
