import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { UserRoles } from 'src/core/enum/userRoles';

export class UpdateDisciplineDto {
    @IsOptional()
    @ApiProperty()
    title?: string;
  
    @IsOptional()
    @ApiProperty()
    description?: string;
  
    @IsOptional()
    @ApiProperty()
    score?: number;
}
