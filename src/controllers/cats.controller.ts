import { Controller, Get, Post, Body } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
// import { CatsService } from './cats.service';
// import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dtos/cat';
import { CatsService } from '@src/services/cats.service';
import { Cat } from '@src/interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
