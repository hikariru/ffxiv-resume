import {Controller, Get, Render, Req, Res} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class LandingController {
    @Get()
    @Render('index')
    index() {
        return {title: 'Hello!'};
    }
}
