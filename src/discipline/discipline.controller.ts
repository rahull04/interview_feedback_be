import { Body, Controller, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';
import { GetUser } from 'src/user/get-user.decorator';
import { DisciplineService } from './discipline.service';
import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { Discipline } from './entities/discipline.entity';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('discipline')
export class DisciplineController {

    constructor(private readonly disciplineService: DisciplineService) {}

    @Post('')
    createDiscipline(
      @
      Body() createDisciplineDto: CreateDisciplineDto,
      @GetUser() user: User,
    ): Promise<Discipline> {
      console.log(user);
      return this.disciplineService.createDiscipline(createDisciplineDto, user);
    }

    @Patch(':id')
  updateDiscipline(@Param('id') id: string, @Body() updateDisciplineDto: UpdateDisciplineDto) {
    return this.disciplineService.updateDiscipline(id, updateDisciplineDto);
  }
}
