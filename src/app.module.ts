import { Module } from '@nestjs/common'
import { LandingModule } from './app/landing/landing.module'
import { ResumeModule } from './app/resume/resume.module'
import {TypeOrmModule} from "@nestjs/typeorm";
require('dotenv').config()

@Module({
  imports: [LandingModule, ResumeModule, TypeOrmModule.forRoot({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
    logging: false,
    entities: ['app/entity/**/*.ts', 'app/entity/**/*.js'],
  })],
})
export class AppModule {}
