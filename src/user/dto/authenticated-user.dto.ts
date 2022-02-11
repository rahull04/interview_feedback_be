import { ApiProperty } from '@nestjs/swagger';

export class AuthenticatedUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  fullname: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  img: string;
}
