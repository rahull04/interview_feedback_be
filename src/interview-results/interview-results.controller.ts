import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Discipline } from 'src/discipline/entities/discipline.entity';
import { User } from 'src/user/entities/user.entity';
import { GetUser } from 'src/user/get-user.decorator';
import { CreateInterviewResultDto } from './dto/create-interview-result.dto';
import { InterviewResultsService } from './interview-results.service';
import { InterviewResult } from './entities/interview-result.entity';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('interview-results')
export class InterviewResultsController {
    constructor(private readonly interviewResultsService: InterviewResultsService) {}

    @Post('')
    createInterviewResult(
      @Body() createInterviewResultDto: CreateInterviewResultDto,
      @GetUser() interviewer: User,
    ){
      console.log(interviewer);
      return this.interviewResultsService.createInterviewResult(createInterviewResultDto, interviewer);
    }

    @Get('/all')
    async getAll() {
      return this.interviewResultsService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: string) {
      return this.interviewResultsService.getById(id);
    }

}
