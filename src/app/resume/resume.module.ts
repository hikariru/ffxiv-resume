import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';

@Module({
  controllers: [ResumeController],
  providers: [],
  exports: [],
})
export class LandingModule {}
