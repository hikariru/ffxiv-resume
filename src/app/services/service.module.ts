import { Module } from '@nestjs/common'
import { RoleService } from './role.service'
import { DatacenterService } from './datacenter.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Datacenter } from '../entity/master/datacenter'
import { Role } from '../entity/master/role'
import { Raid } from '../entity/master/raid'
import { RaidService } from './raid.service'

@Module({
  imports: [TypeOrmModule.forFeature([Role, Datacenter, Raid])],
  providers: [RoleService, DatacenterService, RaidService],
  exports: [RoleService, DatacenterService, RaidService],
})
export class ServiceModule {}
