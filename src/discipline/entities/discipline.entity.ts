import { UserRoles } from 'src/core/enum/userRoles';
import { InterviewResult } from 'src/interview-results/entities/interview-result.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DisciplineResult } from './../../interview-results/entities/discipline_result.entity';

@Entity()
export class Discipline {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column({ unique: true })
  public title: string;

  @Column()
  public description: string;

  @Column()
  public score: number;

  @OneToMany(() => DisciplineResult, (disciplineResult) => disciplineResult.discipline, { nullable: false })
  disciplineResult: DisciplineResult[];

}
