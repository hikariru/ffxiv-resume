import { Controller, Get, Render, Req, Session } from '@nestjs/common'
import { Request } from 'express'
import { CreateResumeService } from './create-resume.service'
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
  async create(@Session() session: Record<string, any>) {
    // TODO: get characterId from session

    const datacenters = await this.datacenterService.findAll()
    const roles = await this.jobService.findAll()
    const raids = await this.raidService.findAll()

    return { title: 'Create!', datacenters: datacenters, roles: roles, raids: raids }
  }
}
