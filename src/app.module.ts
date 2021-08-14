import { Module } from '@nestjs/common'
import { LandingModule } from './app/landing/landing.module'
import { ResumeModule } from './app/resume/resume.module'

@Module({
  imports: [LandingModule, ResumeModule],
})
export class AppModule {}
