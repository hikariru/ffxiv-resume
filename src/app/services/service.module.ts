import { Module } from '@nestjs/common'
import { JobService } from './job.service'
import { DatacenterService } from './datacenter.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Job } from '../entity/master/job'
import {Datacenter} from "../entity/master/datacenter";

@Module({
  imports: [TypeOrmModule.forFeature([Job, Datacenter])],
  providers: [JobService, DatacenterService],
  exports: [JobService, DatacenterService],
})
export class ServiceModule {}
