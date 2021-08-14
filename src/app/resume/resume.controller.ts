import { Controller, Get, Render } from '@nestjs/common'
import { CreateResumeService } from './createResume.service'
import { JobService } from '../services/job.service'
import { WorldService } from '../services/world.service'

@Controller('resume')
export class ResumeController {
  constructor(
    private readonly createService: CreateResumeService,
    private readonly jobService: JobService,
    private readonly worldService: WorldService,
  ) {}

  @Get('create')
  @Render('resume/create')
  async create() {
    const worlds = await this.worldService.findAllWorlds()
    const jobs = await this.jobService.findAllJobs()

    return { title: 'Create!', worlds: worlds, jobs: jobs }
  }
}
