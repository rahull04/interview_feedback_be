import { Injectable } from '@nestjs/common';
import { CreateInterviewResultDto } from './dto/create-interview-result.dto';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InterviewResultRepository } from './interview-result.repository';
import { CandidateRepository } from './../candidate/candidate.repository';
import { DisciplineRepository } from './../discipline/discipline.repository';
import { DisciplineResultRepository } from './discipline-result.repository';
import { DisciplineResult } from './entities/discipline_result.entity';

@Injectable()
export class InterviewResultsService {
  constructor(
    @InjectRepository(InterviewResultRepository)
    private interviewResultRepository: InterviewResultRepository,

    @InjectRepository(CandidateRepository)
    private candidateRepository: CandidateRepository,

    @InjectRepository(DisciplineRepository)
    private disciplineRepository: DisciplineRepository,

    @InjectRepository(DisciplineResultRepository)
    private disciplineResultRepository: DisciplineResultRepository,
  ) {}

  async createInterviewResult(
    createInterviewResultDto: CreateInterviewResultDto,
    interviewer: User,
  ) {
    const { candidate_id, disciplineData } = createInterviewResultDto;
    const candidate = await this.candidateRepository.findOne(candidate_id);
    const interview =
      await this.interviewResultRepository.createInterviewResult(
        createInterviewResultDto,
        interviewer,
        candidate,
      );

    const discipline: DisciplineResult[] =
      await this.disciplineResultRepository.createDisciplineResult(
        disciplineData,
        interview,
      );
    interview.disciplineResult = discipline;
    console.log('Disc', discipline);
    return interview;
  }

  async getAll(){
      return this.interviewResultRepository.find();
  }

  async getById(id: string){
    return this.interviewResultRepository.findOne(id);
}
}
