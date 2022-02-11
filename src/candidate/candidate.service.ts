import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CandidateRepository } from './candidate.repository';
import { CandidateDto } from './dto/candidate.dto';
import { CreateCandidateDto } from './dto/createCandidate.dto';
import { Candidate } from './entities/candidate.entity';

@Injectable()
export class CandidateService {
    constructor(
        @InjectRepository(CandidateRepository) private candidateRepository,
      ) {}

    async createCandidate(
        createCandidateDto: CreateCandidateDto,
      ): Promise<CandidateDto> {
        return this.candidateRepository.save(createCandidateDto);
      }
}
