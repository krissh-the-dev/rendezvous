import type { Calendar } from 'class-scheduler/types';
import { ClassLinks } from './class-link.type';

export enum classes {
  POM = 'POM',
  CNS = 'CNS',
  CC = 'CC',
  OE2 = 'OE2',
  PE2 = 'PE2', // TQM
  PE3 = 'PE3',
  SL = 'SL',
  CCL = 'CCL',
  TUT = 'TUT',
  PL = 'PL',
  SDT = 'SDT',
}

export const meetLinks: ClassLinks<classes> = {
  CC: 'https://meet.google.com/unu-fqmm-cae',
  POM: 'https://meet.google.com/icj-wnjm-vfw',
  PE2: 'https://meet.google.com/aci-nmhu-fbu',
  CCL: 'https://meet.google.com/bof-xguz-wum',
};

export const calendar: Calendar = [
  { day: 'Sunday', timeRange: [], classes: [] },
  {
    day: 'Monday',
    timeRange: [
      { start: { hour: 9, minute: 10 }, end: { hour: 10, minute: 0 } },
      { start: { hour: 10, minute: 10 }, end: { hour: 11, minute: 0 } },
      { start: { hour: 11, minute: 10 }, end: { hour: 12, minute: 0 } },
      { start: { hour: 13, minute: 0 }, end: { hour: 13, minute: 50 } },
      { start: { hour: 13, minute: 50 }, end: { hour: 14, minute: 40 } },
      { start: { hour: 14, minute: 50 }, end: { hour: 15, minute: 40 } },
      { start: { hour: 15, minute: 50 }, end: { hour: 16, minute: 40 } },
    ],
    classes: [
      classes.TUT,
      classes.CC,
      classes.CNS,
      classes.PE3,
      classes.PL,
      classes.POM,
      classes.PE2,
    ],
  },
  {
    day: 'Tuesday',
    timeRange: [
      { start: { hour: 9, minute: 10 }, end: { hour: 10, minute: 0 } },
      { start: { hour: 10, minute: 10 }, end: { hour: 11, minute: 0 } },
      { start: { hour: 11, minute: 10 }, end: { hour: 12, minute: 0 } },
      { start: { hour: 12, minute: 10 }, end: { hour: 13, minute: 0 } },
      { start: { hour: 13, minute: 50 }, end: { hour: 15, minute: 40 } },
      { start: { hour: 15, minute: 50 }, end: { hour: 16, minute: 40 } },
    ],
    classes: [classes.TUT, classes.CC, classes.PE3, classes.OE2, classes.CC],
  },
  {
    day: 'Wednesday',
    timeRange: [
      { start: { hour: 9, minute: 10 }, end: { hour: 12, minute: 0 } },
      { start: { hour: 13, minute: 0 }, end: { hour: 16, minute: 40 } },
    ],
    classes: [classes.SDT, classes.SL],
  },
  {
    day: 'Thursday',
    timeRange: [
      { start: { hour: 9, minute: 10 }, end: { hour: 10, minute: 0 } },
      { start: { hour: 10, minute: 10 }, end: { hour: 12, minute: 0 } },
      { start: { hour: 12, minute: 10 }, end: { hour: 13, minute: 0 } },
      { start: { hour: 13, minute: 50 }, end: { hour: 16, minute: 40 } },
    ],
    classes: [classes.PL, classes.CNS, classes.OE2, classes.CCL],
  },
  {
    day: 'Friday',
    timeRange: [
      { start: { hour: 9, minute: 10 }, end: { hour: 11, minute: 0 } },
      { start: { hour: 11, minute: 10 }, end: { hour: 13, minute: 0 } },
      { start: { hour: 13, minute: 50 }, end: { hour: 15, minute: 40 } },
      { start: { hour: 15, minute: 50 }, end: { hour: 16, minute: 40 } },
    ],
    classes: [classes.PE2, classes.PE3, classes.POM, classes.PL],
  },
  { day: 'Saturday', timeRange: [], classes: [] },
];
