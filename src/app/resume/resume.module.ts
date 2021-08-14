import { Module } from '@nestjs/common'
import { ResumeController } from './resume.controller'
import { CreateResumeService } from './createResume.service'
import { RoleService } from '../services/role.service'
import { DatacenterService } from '../services/datacenter.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ServiceModule } from '../services/service.module'
import {Datacenter} from "../entity/master/datacenter";
import {Role} from "../entity/master/role";

@Module({
  imports: [TypeOrmModule.forFeature([Role, Datacenter]), ServiceModule],
  controllers: [ResumeController],
  providers: [CreateResumeService, DatacenterService, RoleService],
  exports: [],
})
export class ResumeModule {}
