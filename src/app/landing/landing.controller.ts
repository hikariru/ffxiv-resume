import { Controller, Get, Render} from '@nestjs/common';

@Controller()
export class LandingController {
  @Get()
  @Render('index')
  index() {
    return { title: 'Hello!' };
  }
}
