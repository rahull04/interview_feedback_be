import { IsNotEmpty } from 'class-validator';
import { Candidate } from 'src/candidate/entities/candidate.entity';
import { Discipline } from 'src/discipline/entities/discipline.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InterviewResult } from 'src/interview-results/entities/interview-result.entity';

@Entity()
export class DisciplineResult {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  // @Exclude({ toPlainOnly: true })
  @ManyToOne(() => InterviewResult, (interviewResult) => interviewResult.disciplineResult, {
    nullable: false,
  })
  interview: InterviewResult;

  @ManyToOne(() => Discipline, (discipline) => discipline.disciplineResult, {
    nullable: false,
    eager: true,
  })
  discipline: Discipline;

  @Column()
  @IsNotEmpty()
  public finalScore: number;

  @Column()
  @IsNotEmpty()
  public comments: string;
}
