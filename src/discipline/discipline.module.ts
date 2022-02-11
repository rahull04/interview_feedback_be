import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisciplineController } from './discipline.controller';
import { DisciplineRepository } from './discipline.repository';
import { DisciplineService } from './discipline.service';

@Module({
  imports:[TypeOrmModule.forFeature([DisciplineRepository])],
  controllers: [DisciplineController],
  providers: [DisciplineService]
})
export class DisciplineModule {}
