import { IsDefined, IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { UserRoles } from 'src/core/enum/userRoles';
import { Discipline } from 'src/discipline/entities/discipline.entity';
import { DisciplineResult } from './../entities/discipline_result.entity';

interface DisciplineObj {
  discipline_id: string,
  finalScore: number,
  comments: string
}

export class CreateInterviewResultDto {
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  interviewDate: Date;

  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  candidate_id: string;

  @IsString()
  @ApiProperty()
  disciplineData: DisciplineObj[];

}
