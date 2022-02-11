import { Exclude } from 'class-transformer';
import { UserRoles } from 'src/core/enum/userRoles';
import { InterviewResult } from 'src/interview-results/entities/interview-result.entity';
import { BeforeInsert, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ExclusionMetadata } from 'typeorm/metadata/ExclusionMetadata';


@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column()
  public fullname: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  @Exclude({
    toPlainOnly: true
  })
  public password: string;

  @Column({ nullable: true })
  public img: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    default: UserRoles.USER,
  })
  type: UserRoles;

  @OneToMany(() => InterviewResult, (interviewResult) => interviewResult.interviewer, { nullable: false })
  interviewResult: InterviewResult[];

}
