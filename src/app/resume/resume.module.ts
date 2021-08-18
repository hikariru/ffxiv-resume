import { Module } from '@nestjs/common'
import { ResumeController } from './resume.controller'
import { CreateResumeService } from './createResume.service'
import { ServiceModule } from '../service/service.module'

@Module({
  imports: [ServiceModule],
  controllers: [ResumeController],
  providers: [CreateResumeService],
  exports: [],
})
export class ResumeModule {}
