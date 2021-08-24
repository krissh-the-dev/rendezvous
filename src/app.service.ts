import { Schedule } from 'class-scheduler';
import { Injectable } from '@nestjs/common';
import * as calendars from './db/calendars';
import { ClassIds } from './app.entity';
import { meetLinks } from './db/cse_a';

@Injectable()
export class AppService {
  private singletons: { [key: string]: Schedule } = {};

  constructor() {
    for (const [className, calendar] of Object.entries(calendars)) {
      this.singletons[className] = new Schedule(calendar);
    }
  }

  getCurrentClassMeetLink(classId: ClassIds): string {
    const currClass = this.singletons[classId].getCurrentClass();
    return meetLinks[currClass];
  }
}
