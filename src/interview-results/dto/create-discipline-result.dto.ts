import { IsDefined, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiBody } from '@nestjs/swagger';

export interface DisciplineObj {
    discipline_id: string,
    finalScore: number,
    comments: string
  }

// export class CreateDisciplineResultDto {

// //   @IsDefined()
// //   @IsNotEmpty()
// //   @ApiProperty()
// //   comments: string;

// //   @IsNumber()
// //   @IsNotEmpty()
// //   @ApiProperty()
// //   finalScore: number;

//   @IsString()
//   @ApiProperty()
//   disciplineData: DisciplineObj[];
// }
