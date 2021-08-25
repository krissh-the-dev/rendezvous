import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { ClassIds } from './classes_list';
import { GetClassLinkDto } from './get-class-link.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:classId')
  @Redirect('https://meet.google.com', 302)
  getCurrentClassMeetLink(@Param() params: GetClassLinkDto) {
    const link = this.appService.getCurrentClassMeetLink(params.classId);
    if (!link) return { url: `/noLink/${params.classId}` };
    return { url: link };
  }

  @Get('/noLink/:classId')
  classLinkNotFound(@Param('classId') classId: ClassIds) {
    return `No permanent links found for ${this.appService.getCurrentClassName(
      classId,
    )}`;
  }
}
