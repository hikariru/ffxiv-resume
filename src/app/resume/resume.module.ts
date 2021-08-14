import { Module } from '@nestjs/common'
import { ResumeController } from './resume.controller'
import { CreateResumeService } from './createResume.service'
import { JobService } from '../services/job.service'
import { DatacenterService } from '../services/datacenter.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ServiceModule } from '../services/service.module'
import { Job } from '../entity/master/job'
import {Datacenter} from "../entity/master/datacenter";

@Module({
  imports: [TypeOrmModule.forFeature([Job, Datacenter]), ServiceModule],
  controllers: [ResumeController],
  providers: [CreateResumeService, DatacenterService, JobService],
  exports: [],
})
export class ResumeModule {}
