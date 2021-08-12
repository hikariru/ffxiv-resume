import {Controller, Get, Render, Req, Res} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('resume')
export class ResumeController {
    @Get('create')
    @Render('resume/create')
    create() {
        return {title: 'Hello!'};
    }
}
