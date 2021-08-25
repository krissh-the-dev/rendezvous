import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { GetClassLinkDto } from './get-class-link.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:classId')
  @Redirect('https://meet.google.com', 302)
  getCurrentClassMeetLink(@Param() params: GetClassLinkDto) {
    return { url: this.appService.getCurrentClassMeetLink(params.classId) };
  }
}
