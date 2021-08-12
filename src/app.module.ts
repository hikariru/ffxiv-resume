import { Module } from '@nestjs/common';
import {LandingModule} from "./app/landing/landing.module";

@Module({
  imports: [LandingModule],
})
export class AppModule {}
