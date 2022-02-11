import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateRepository } from 'src/candidate/candidate.repository';
import { DisciplineRepository } from 'src/discipline/discipline.repository';
import { DisciplineResultRepository } from './discipline-result.repository';
import { InterviewResultRepository } from './interview-result.repository';
import { InterviewResultsController } from './interview-results.controller';
import { InterviewResultsService } from './interview-results.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([InterviewResultRepository]),
    TypeOrmModule.forFeature([CandidateRepository]),
    TypeOrmModule.forFeature([DisciplineRepository]),
    TypeOrmModule.forFeature([DisciplineResultRepository]),
  ],
  controllers: [InterviewResultsController],
  providers: [InterviewResultsService],
})
export class InterviewResultsModule {}
