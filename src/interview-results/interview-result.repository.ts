import { User } from 'src/user/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateInterviewResultDto } from './dto/create-interview-result.dto';
import { InterviewResult } from './entities/interview-result.entity';
import { Candidate } from './../candidate/entities/candidate.entity';
import { Discipline } from './../discipline/entities/discipline.entity';

@EntityRepository(InterviewResult)
export class InterviewResultRepository extends Repository<InterviewResult> {
  async createInterviewResult(
    CreateInterviewResultDto: CreateInterviewResultDto,
    interviewer: User,
    candidate: Candidate,
  ): Promise<InterviewResult> {
    const { interviewDate } = CreateInterviewResultDto;
    const res =  this.create({
        interviewer,
        interviewDate,
        candidate,
    })
    return this.save(res);
  }

}
