import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { UserRoles } from 'src/core/enum/userRoles';

export class UpdateUserDto {
  @IsOptional()
  @ApiProperty()
  fullname?: string;

  @IsOptional()
  @ApiProperty()
  password?: string;

  @IsOptional()
  @ApiProperty()
  img?: string;
  
  @IsOptional()
  @ApiProperty()
  type?: UserRoles;
}
