import { Module } from '@nestjs/common';
import {AuthService} from "./auth.service";
import {ServiceModule} from "../services/service.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";

@Module({
  imports: [ServiceModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
