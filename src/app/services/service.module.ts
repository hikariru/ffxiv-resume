import { Module } from '@nestjs/common'
import { RoleService } from './role.service'
import { DatacenterService } from './datacenter.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import {Datacenter} from "../entity/master/datacenter";
import {Role} from "../entity/master/role";

@Module({
  imports: [TypeOrmModule.forFeature([Role, Datacenter])],
  providers: [RoleService, DatacenterService],
  exports: [RoleService, DatacenterService],
})
export class ServiceModule {}
