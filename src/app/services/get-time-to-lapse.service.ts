import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class GetTimeToLapseService {

  constructor() { }

  timeToLapse(data): number {
    const date = new Date(data);
    const days = moment.duration ( Date.now() - date.getTime(), 'milliseconds');
    return  (days.days() * 24 + days.hours());
  }
}
