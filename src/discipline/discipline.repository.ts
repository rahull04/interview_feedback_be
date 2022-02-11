import { User } from 'src/user/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Discipline } from './entities/discipline.entity';
import { CreateDisciplineDto } from './dto/create-discipline.dto';

@EntityRepository(Discipline)
export class DisciplineRepository extends Repository<Discipline> {
  async createDiscipline(
    createDisciplineDto: CreateDisciplineDto,
    user: User,
  ): Promise<Discipline> {
    const { title, description, score } = createDisciplineDto;
    const discplineVal = this.create({
      title,
      description,
      score
    });
    return this.save(discplineVal);
  }

}
