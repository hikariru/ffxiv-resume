import { Controller, Get, Render, Req, Res, Session } from '@nestjs/common'
import { Request, Response } from 'express'
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
  async create(@Req() req: Request, @Res() res: Response, @Session() session: Record<string, any>) {
    const characterId = session.characterId || 13821953 // Yoshi'p Sampo
    if (!characterId) {
      res.redirect('/')
      return
    }

    const datacenters = await this.datacenterService.findAll()
    const roles = await this.jobService.findAll()
    const raids = await this.raidService.findAll()

    return res.render('resume/create', {
      title: 'Create!',
      datacenters: datacenters,
      roles: roles,
      raids: raids,
      characterId: characterId,
      csrfToken: req.csrfToken(),
    })
  }
}
