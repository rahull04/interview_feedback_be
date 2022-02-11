import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { DisciplineRepository } from './discipline.repository';
import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { Discipline } from './entities/discipline.entity';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';

@Injectable()
export class DisciplineService {

    constructor(
        @InjectRepository(DisciplineRepository)
        private disciplineRepository: DisciplineRepository
      ) {}

    async createDiscipline(
        createDisciplineDto: CreateDisciplineDto,
        assigneeId: User,
      ): Promise<Discipline> {
        return this.disciplineRepository.createDiscipline(createDisciplineDto, assigneeId);
      }

      async getDisciplineById(id: string): Promise<CreateDisciplineDto> {
        const discipline = await this.disciplineRepository.findOne(id);
        if (!discipline) {
          throw new NotFoundException(`User with "${id}" not found.`);
        }
        return discipline;
      }

      async updateDiscipline(id: any, updateDisciplineDto: UpdateDisciplineDto): Promise<UpdateDisciplineDto> {
        const oldDisc = await this.getDisciplineById(id);
        const { title, description, score } = updateDisciplineDto;
        if (title) {
            oldDisc.title = title;
        }
        if (description) {
            oldDisc.description = description;
        }
        if (score) {
            oldDisc.score = score;
        }

        return await this.disciplineRepository.save(oldDisc);
      }

}
