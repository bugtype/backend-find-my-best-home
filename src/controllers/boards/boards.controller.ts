import { Controller, Get } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
