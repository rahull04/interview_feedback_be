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
import { DisciplineResult } from './discipline_result.entity';

@Entity()
export class InterviewResult {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column()
  @IsNotEmpty()
  public interviewDate: Date;

  @ManyToOne(() => Candidate, (candidate) => candidate.interviewResult, {
    nullable: false,
    eager: true,
  })
  candidate: Candidate;

  @ManyToOne(() => User, (user) => user.interviewResult, {
    nullable: false,
    eager: true,
  })
  interviewer: User;

  @OneToMany(() => DisciplineResult, (disciplineResult) => disciplineResult.interview, { nullable: false, eager: true, })
  disciplineResult: DisciplineResult[];
  
}
