import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateCandidateDto } from './dto/createCandidate.dto';
import { CandidateService } from './candidate.service';

@Controller('candidate')
export class CandidateController {
    constructor(private readonly candidateService: CandidateService) {}

    @Post('')
    @HttpCode(200)
    async createCandidate(@Body() createCandidateDto: CreateCandidateDto) {
      return this.candidateService.createCandidate(createCandidateDto);
    }
}
