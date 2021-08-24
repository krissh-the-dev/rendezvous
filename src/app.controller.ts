import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { GetClassLinkDto } from './get-class-link.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:classId')
  getCurrentClassMeetLink(@Param() params: GetClassLinkDto): string {
    return this.appService.getCurrentClassMeetLink(params.classId);
  }
}
