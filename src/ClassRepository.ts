import { Schedule } from 'class-scheduler';
import type { Calendar, TimeRange, Day } from 'class-scheduler/types';

enum Enum {}

export declare interface SpecialCalendar<Papers extends Enum> extends Calendar {
  day: Day;
  timeRange: Array<TimeRange>;
  classes: Array<Papers>;
}

export declare type ClassMeetLinks<Papers extends Enum> = {
  [key in Papers]?: string;
};

export class ClassRepository<Papers extends Enum> extends Schedule {
  constructor(
    calendar: SpecialCalendar<Papers>,
    private classMeetLinks: Array<ClassMeetLinks<Papers>>,
    private papers: Papers,
  ) {
    super(calendar);
  }

  getClassMeetLink(nextClassFallback?: boolean): string | null {
    const currentClass = this.getCurrentClass();
    if (currentClass in Object.values(this.papers)) {
      return this.classMeetLinks[currentClass];
    }

    if (nextClassFallback) {
      const nextClass = this.getNextClass({ allowNextDay: true });
      if (currentClass in Object.values(this.papers)) {
        return this.classMeetLinks[nextClass];
      }
    }

    return null;
  }
}
