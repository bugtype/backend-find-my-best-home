import {
  Controller,
  Get,
  Post,
  Query,
  HttpStatus,
  HttpException,
  Param,
} from '@nestjs/common';

import { BoardsService } from './boards.service';
import {
  ApiResponse,
  ApiQuery,
  ApiBadRequestResponse,
  ApiParam,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { GetBoardsListDto, GetBoardDetailDto } from 'models';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: '조회 성공',
    type: [GetBoardsListDto],
  })
  @ApiQuery({ name: 'page', type: Number })
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  async findAll(@Query() query) {
    // TODO: validation pipe
    if (query.page && Number.isInteger(Number(query.page))) {
      const boards = await await this.boardsService.findAllByPage(query.page);
      if (boards.length) {
        return { data: boards };
      }
      throw new HttpException(
        '요청하신 데이터가 없습니다.',
        HttpStatus.NOT_FOUND,
      );
    }
    throw new HttpException('잘못된 요청입니다.', HttpStatus.BAD_REQUEST);
  }

  @Get(':no')
  @ApiResponse({
    status: 200,
    description: '조회 성공',
    type: GetBoardDetailDto,
  })
  @ApiParam({ name: 'no', type: Number })
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  async findOne(@Param('no') no) {
    // TODO: validation pipe
    if (no && Number.isInteger(Number(no))) {
      const board = await this.boardsService.findOne(no);
      if (board) {
        return { data: board };
      }
      throw new HttpException(
        '요청하신 데이터가 없습니다.',
        HttpStatus.NOT_FOUND,
      );
    }
    throw new HttpException('잘못된 요청입니다.', HttpStatus.BAD_REQUEST);
  }

  // TODO: 유저가 생성하도록 변경해야 한다.
  // Sample용 코드 생성
  @Post()
  @ApiResponse({
    status: 201,
    description: '샘플 데이터 생성 성공',
  })
  create() {
    this.boardsService.createSample();
    return '샘플 데이터가 생성되었습니다.';
  }
}
