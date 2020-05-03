import { Controller, Get, Param, Query } from '@nestjs/common';

// TODO: 작업해야함.

const dummyData: Record<number, any> = {
  1: [
    {
      no: 1000,
      city: '강남',
      subject: '강남 자취 어떤가요??',
      userName: '친구따라 강남',
      date: '2020-05-23T16:01:24.137Z',
    },
    {
      no: 999,
      city: '강남',
      subject: '강남에서 원룸 구할 수 있나요?',
      userName: '예비 강남인',
      date: '2020-05-22T14:26:38.837Z',
    },
    {
      no: 990,
      city: '판교',
      subject: '판교 지역 살기 좋습니다.',
      userName: '판교 자취생',
      date: '2020-04-22T08:26:38.837Z',
    },
    {
      no: 992,
      city: '종로',
      subject: '종로도 좋아요',
      userName: '종로-자취생',
      date: '2020-03-19T08:26:38.837Z',
    },
  ],
  2: [
    {
      no: 888,
      city: '판교',
      subject: '판교좋네요 여러분',
      userName: '친구따라 판교',
      date: '2020-04-23T16:01:24.137Z',
    },
    {
      no: 855,
      city: '판교',
      subject: '판교 ㄱㄱㄱㄱㄱㄱ?',
      userName: '예비 판교인',
      date: '2020-04-22T14:26:38.837Z',
    },
    {
      no: 842,
      city: '판교',
      subject: '판교 지역 살기 좋습니다......ㅎ',
      userName: '판교 자취생',
      date: '2020-03-22T08:26:38.837Z',
    },
    {
      no: 841,
      city: '종로',
      subject: '종로도 좋아요',
      userName: '종로-자취생',
      date: '2020-03-19T08:26:38.837Z',
    },
  ],
};

@Controller('boards')
export class BoardsController {
  @Get()
  findAll(@Query() query): ApiResponse<typeof dummyData> {
    if (query.page) {
      return { data: dummyData[query.page] || [] };
    }
    return { data: [...dummyData[1], ...dummyData[2]] };
  }
}
