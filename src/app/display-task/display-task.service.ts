import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DisplayTaskService {
  private subject = new Subject<any>();

  addTaskToCompletedList( task: string ) {
    console.log("At sercice", task);
    this.subject.next({ text: task });
  }

  getCompletedTask(): Observable<any> {
    return this.subject.asObservable();
  }

}
