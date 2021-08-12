import {Controller, Get, Render, Req, Res} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('resume')
export class LandingController {
    @Get('create')
    @Render('resume/create')
    create() {
        return {title: 'Hello!'};
    }
}
