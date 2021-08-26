import type { Calendar } from 'class-scheduler/types';
import { ClassLinks } from './class-link.type';

export enum classes {
  DS = 'DS', // DS LAB
  OOP = 'OOP', // OOP LAB
  ADC = 'ADC',
  DPSD = 'DPSD',//DPSD LAB
}

export const meetLinks: ClassLinks<classes> = {
  DS : 'http://meet.google.com/pxg-zdym-jvp',
  OOP : 'http://meet.google.com/sgp-sbir-euq',
  DPSD : 'http://meet.google.com/qhh-hqff-btr',
};

export const calendar: Calendar = [
  { day: 'Sunday', timeRange: [], classes: [] },
  {
    day: 'Monday',
    timeRange: [
      { start: { hour: 9, minute: 10 }, end: { hour: 13, minute: 50 } },
      { start: { hour: 13, minute: 50 }, end: { hour: 15, minute: 40 } },
    ],
    classes: [
      classes.DS,
      classes.DPSD,
    ],
  },
  {
    day: 'Tuesday',
    timeRange: [
      { start: { hour: 13, minute: 50 }, end: { hour: 15, minute: 40 } },
    ],
    classes: [classes.DS],
  },
  {
    day: 'Wednesday',
    timeRange: [
      { start: { hour: 9, minute: 10 }, end: { hour: 13, minute: 0 } },
      { start: { hour: 15, minute: 50 }, end: { hour: 16, minute: 40 } },
    ],
    classes: [classes.OOP, classes.DPSD],
  },
  {
    day: 'Thursday',
    timeRange: [
      { start: { hour: 9, minute: 10 }, end: { hour: 12, minute: 0 } },
    ],
    classes: [classes.DS],
  },
  {
    day: 'Friday',
    timeRange: [
      { start: { hour: 14, minute: 50 }, end: { hour: 16, minute: 40 } },
    ],
    classes: [classes.OOP,],
  },
  { day: 'Saturday', timeRange: [], classes: [] },
];
