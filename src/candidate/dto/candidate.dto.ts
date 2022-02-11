import {
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { UserRoles } from 'src/core/enum/userRoles';

export class CandidateDto {
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  id: string;

  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  fullname: string;

  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  experience: string;
}
