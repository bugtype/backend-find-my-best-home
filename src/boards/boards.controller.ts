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
import { ApiResponse, ApiQuery, ApiBadRequestResponse } from '@nestjs/swagger';
import { GetBoardsListDto } from 'models';
import { Board } from './board.entity';

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
  async findAll(@Query() query) {
    // validation
    if (query.page && Number.isInteger(Number(query.page))) {
      return { data: await this.boardsService.findAllByPage(query.page) };
    }
    throw new HttpException(
      'page 파라미터값을 확인해주세요.',
      HttpStatus.BAD_REQUEST,
    );
  }

  @Get(':no')
  @ApiResponse({
    status: 200,
    description: '조회 성공',
    type: GetBoardsListDto,
  })
  @ApiQuery({ name: 'page', type: Number })
  @ApiBadRequestResponse()
  async findOne(@Param('no') no) {
    // validation
    if (no && Number.isInteger(Number(no))) {
      return { data: await this.boardsService.findOne(no) };
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
