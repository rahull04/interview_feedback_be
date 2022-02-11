import { Test, TestingModule } from '@nestjs/testing';
import { InterviewResultsService } from './interview-results.service';

describe('InterviewResultsService', () => {
  let service: InterviewResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterviewResultsService],
    }).compile();

    service = module.get<InterviewResultsService>(InterviewResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
