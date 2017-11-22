import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class SetDueDateService {

  constructor() { }

  setDueDate() {
    if ( moment().hour() >= 21 ) {
      const date =  moment().add(1, 'days').hour(21).minute(0).second(0);
      return date;
    } else {
      return moment().hour(21).minute(0).second(0);
    }
  }
}
