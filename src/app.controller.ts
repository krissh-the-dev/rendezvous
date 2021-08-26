import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { GetClassLinkDto } from './get-class-link.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:classId')
  getCurrentClassMeetLink(
    @Param() params: GetClassLinkDto,
    @Res() res: Response,
  ) {
    const link = this.appService.getCurrentClassMeetLink(params.classId);

    if (!link)
      return res.send(
        `No permanent links found for ${this.appService.getCurrentClassName(
          params.classId,
        )}`,
      );
    return res.redirect(link);
  }
}
