import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
