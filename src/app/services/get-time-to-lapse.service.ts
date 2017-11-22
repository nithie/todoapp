import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class GetTimeToLapseService {

  constructor() { }

  timeToLapse(data): any {
    console.log(data);
  }
}
