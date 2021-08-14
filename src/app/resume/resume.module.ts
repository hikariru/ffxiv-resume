import { Module } from '@nestjs/common'
import { ResumeController } from './resume.controller'
import { CreateResumeService } from './createResume.service'
import { JobService } from '../services/job.service'
import { WorldService } from '../services/world.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ServiceModule } from '../services/service.module'
import { Job } from '../entity/master/job'
import { World } from '../entity/master/world'

@Module({
  imports: [TypeOrmModule.forFeature([Job, World]), ServiceModule],
  controllers: [ResumeController],
  providers: [CreateResumeService],
  exports: [],
})
export class ResumeModule {}
