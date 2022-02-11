import { Test, TestingModule } from '@nestjs/testing';
import { InterviewResultsController } from './interview-results.controller';

describe('InterviewResultsController', () => {
  let controller: InterviewResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterviewResultsController],
    }).compile();

    controller = module.get<InterviewResultsController>(InterviewResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
