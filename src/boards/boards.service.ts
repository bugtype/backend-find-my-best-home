import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
  ) {}

  findAll(): Promise<Board[]> {
    return this.boardsRepository.find();
  }

  findOne(id: number): Promise<Board> {
    return this.boardsRepository.findOne({ id: id });
  }

  findAllByPage(page: number): Promise<Board[]> {
    return this.boardsRepository
      .createQueryBuilder()
      .addOrderBy('id', 'DESC')
      .offset((page - 1) * 5)
      .limit(5)
      .getMany();
  }

  // TODO: 제거해야함
  createSample() {
    const samples = [
      {
        id: 1000,
        city: '강남',
        subject: '강남 자취 어떤가요??',
        userName: '친구따라 강남',
        date: '2020-05-23T16:01:24.137Z',
      },
      {
        id: 999,
        city: '강남',
        subject: '강남에서 원룸 구할 수 있나요?',
        userName: '예비 강남인',
        date: '2020-05-22T14:26:38.837Z',
      },
      {
        id: 990,
        city: '판교',
        subject: '판교 지역 살기 좋습니다.',
        userName: '판교 자취생',
        date: '2020-04-22T08:26:38.837Z',
      },
      {
        id: 992,
        city: '종로',
        subject: '종로도 좋아요',
        userName: '종로-자취생',
        date: '2020-03-19T08:26:38.837Z',
      },
      {
        id: 888,
        city: '판교',
        subject: '판교좋네요 여러분',
        userName: '친구따라 판교',
        date: '2020-04-23T16:01:24.137Z',
      },
      {
        id: 855,
        city: '판교',
        subject: '판교 ㄱㄱㄱㄱㄱㄱ?',
        userName: '예비 판교인',
        date: '2020-04-22T14:26:38.837Z',
      },
      {
        id: 842,
        city: '판교',
        subject: '판교 지역 살기 좋습니다......ㅎ',
        userName: '판교 자취생',
        date: '2020-03-22T08:26:38.837Z',
      },
      {
        id: 841,
        city: '종로',
        subject: '종로도 좋아요',
        userName: '종로-자취생',
        date: '2020-03-19T08:26:38.837Z',
      },
    ].map(o => {
      const boards = new Board();
      Object.assign(boards, o);
      return boards;
    });
    this.boardsRepository.save(samples);

    return true;
  }

  async remove(id: string): Promise<void> {
    await this.boardsRepository.delete(id);
  }
}
