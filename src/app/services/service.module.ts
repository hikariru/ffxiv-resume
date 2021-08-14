import { Module } from '@nestjs/common'
import { JobService } from './job.service'
import { WorldService } from './world.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Job } from '../entity/master/job'
import { World } from '../entity/master/world'

@Module({
  imports: [TypeOrmModule.forFeature([Job, World])],
  providers: [JobService, WorldService],
  exports: [JobService, WorldService],
})
export class ServiceModule {}
