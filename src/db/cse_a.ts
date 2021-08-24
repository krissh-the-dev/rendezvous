import type { Calendar } from 'class-scheduler/types';
import { ClassLinks } from './class-link.type';

export enum classes {
  'A' = 'A',
}

export const meetLinks: ClassLinks<classes> = {
  A: 'https://meet.google.com/',
};

export const calendar: Calendar = [
  { day: 'Sunday', timeRange: [], classes: [] },
  {
    day: 'Monday',
    timeRange: [
      { start: { hour: 9, minute: 30 }, end: { hour: 10, minute: 30 } },
      { start: { hour: 11, minute: 30 }, end: { hour: 12, minute: 30 } },
      { start: { hour: 13, minute: 30 }, end: { hour: 14, minute: 30 } },
    ],
    classes: [classes.A, classes.A, classes.A],
  },
  {
    day: 'Tuesday',
    timeRange: [
      { start: { hour: 13, minute: 30 }, end: { hour: 14, minute: 30 } },
    ],
    classes: [classes.A],
  },
  {
    day: 'Wednesday',
    timeRange: [
      { start: { hour: 9, minute: 30 }, end: { hour: 10, minute: 30 } },
    ],
    classes: [classes.A],
  },
  {
    day: 'Thursday',
    timeRange: [
      { start: { hour: 9, minute: 30 }, end: { hour: 10, minute: 30 } },
    ],
    classes: [classes.A],
  },
  {
    day: 'Friday',
    timeRange: [
      { start: { hour: 9, minute: 30 }, end: { hour: 10, minute: 30 } },
    ],
    classes: [classes.A],
  },
  { day: 'Saturday', timeRange: [], classes: [] },
];
