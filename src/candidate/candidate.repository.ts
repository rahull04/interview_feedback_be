import { ForbiddenException } from '@nestjs/common';
import {
  EntityManager,
  EntityRepository,
  getManager,
  Repository,
} from 'typeorm';
import { CreateCandidateDto } from './dto/createCandidate.dto';
import { Candidate } from './entities/candidate.entity';

@EntityRepository(Candidate)
export class CandidateRepository extends Repository<Candidate> {
  
}
