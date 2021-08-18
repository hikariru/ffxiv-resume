import { Controller, Get, Render } from '@nestjs/common'
import { CreateResumeService } from './createResume.service'
import { RoleService } from '../service/role.service'
import { DatacenterService } from '../service/datacenter.service'
import { RaidService } from '../service/raid.service'

@Controller('resume')
export class ResumeController {
  constructor(
    private readonly createService: CreateResumeService,
    private readonly jobService: RoleService,
    private readonly datacenterService: DatacenterService,
    private readonly raidService: RaidService,
  ) {}

  @Get('create')
  @Render('resume/create')
  async create() {
    // TODO: get characterId from session
    // if no characterId, redirect into signup

    const datacenters = await this.datacenterService.findAll()
    const roles = await this.jobService.findAll()
    const raids = await this.raidService.findAll()

    return { title: 'Create!', datacenters: datacenters, roles: roles, raids: raids }
  }
}
