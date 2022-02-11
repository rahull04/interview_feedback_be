import { UserRoles } from 'src/core/enum/userRoles';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InterviewResult } from './../../interview-results/entities/interview-result.entity';

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column()
  public fullname: string;

  @Column()
  public experience: string;

  @OneToMany(() => InterviewResult, (interviewResult) => interviewResult.candidate, { nullable: false })
  interviewResult: InterviewResult[];

}
