import { ApiProperty, ApiExtraModels } from '@nestjs/swagger';

export class Board {
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
