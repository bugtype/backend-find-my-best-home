import { ApiProperty } from '@nestjs/swagger';

export class GetBoardDetailDto {
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
