import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateController } from './candidate.controller';
import { CandidateRepository } from './candidate.repository';
import { CandidateService } from './candidate.service';

@Module({
  imports:[TypeOrmModule.forFeature([CandidateRepository])],
  controllers: [CandidateController],
  providers: [CandidateService]
})
export class CandidateModule {}
