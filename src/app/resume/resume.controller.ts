import { Controller, Get, Render} from '@nestjs/common';

@Controller('resume')
export class ResumeController {
  @Get('create')
  @Render('resume/create')
  create() {
    return { title: 'Hello!' };
  }
}
