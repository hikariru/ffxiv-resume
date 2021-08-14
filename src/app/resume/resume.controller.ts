import { Controller, Get, Render } from '@nestjs/common'
import { CreateResumeService } from './createResume.service'
import { RoleService } from '../services/role.service'
import { DatacenterService } from '../services/datacenter.service'

@Controller('resume')
export class ResumeController {
  constructor(
    private readonly createService: CreateResumeService,
    private readonly jobService: RoleService,
    private readonly datacenterService: DatacenterService,
  ) {}

  @Get('create')
  @Render('resume/create')
  async create() {
    const datacenters = await this.datacenterService.findAll()
    const roles = await this.jobService.findAll()

    return { title: 'Create!', datacenters: datacenters, roles: roles }
  }
}
