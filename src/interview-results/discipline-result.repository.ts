import { User } from 'src/user/entities/user.entity';
import { EntityRepository, getManager, Repository } from 'typeorm';
import { CreateInterviewResultDto } from './dto/create-interview-result.dto';
import { Candidate } from './../candidate/entities/candidate.entity';
import { Discipline } from './../discipline/entities/discipline.entity';
import { DisciplineResult } from './entities/discipline_result.entity';
import { DisciplineObj } from './dto/create-discipline-result.dto';
import { InterviewResult } from 'src/interview-results/entities/interview-result.entity';


@EntityRepository(DisciplineResult)
export class DisciplineResultRepository extends Repository<DisciplineResult> {
  async createDisciplineResult(
    createDisciplineResultDto: DisciplineObj[],
    interview: InterviewResult
  ): Promise<DisciplineResult[]> {
    let query = 'INSERT INTO discipline_result ("finalScore","comments","interviewId","disciplineId") VALUES ';
    for(const item of createDisciplineResultDto){
        query += `(${item.finalScore}, '${item.comments}', '${interview.id}', '${item.discipline_id}' ),`
    }
    query = query.slice(0, -1);
    const entityManager = getManager();
    const result = await entityManager.query(query);
    const discplineByInterview = await this.getDisciplineResultByInterview(interview.id.toString());
    
    return discplineByInterview;
  }

  async getDisciplineResultByInterview(interviewId: string){
    const disciplineQuery = `
    SELECT "discipline_result".id, "discipline_result"."finalScore", "discipline_result"."comments",
    "discipline"."title", "discipline"."description", "discipline"."score", "discipline".id as "discipline_id"
    FROM discipline_result
    LEFT JOIN discipline
    ON discipline_result."disciplineId" = discipline.id
    where "interviewId"='${interviewId}'
    ORDER BY "title";
    `
    const entityManager = getManager();
    const discplineByInterview: DisciplineResult[] = await entityManager.query(
        disciplineQuery
    );
    return discplineByInterview; 
  }

}
