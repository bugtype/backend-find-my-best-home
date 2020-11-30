import { ApiProperty } from '@nestjs/swagger';

export class GetBoardsListDto {
  @ApiProperty()
  no!: number;

  @ApiProperty()
  subject!: string;

  @ApiProperty()
  userName!: string;

  @ApiProperty()
  date!: string;

  @ApiProperty()
  city!: string;
}
