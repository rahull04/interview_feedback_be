import { IsDefined, IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { UserRoles } from 'src/core/enum/userRoles';

export class CreateUserDto {
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  fullname: string;

  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsEmail()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  img: string;

  @ApiProperty()
  @IsEnum(UserRoles)
  type: UserRoles;
}
