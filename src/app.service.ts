import { Injectable } from '@nestjs/common';
import { Schedule } from 'class-scheduler';
import { ClassIds } from './classes_list';
import * as calendars from './db/calendars';
import * as meetLinks from './db/meetLinks';

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
    return meetLinks[classId][currClass];
  }

  getCurrentClassName(classId: ClassIds): string {
    return this.singletons[classId].getCurrentClass();
  }
}
