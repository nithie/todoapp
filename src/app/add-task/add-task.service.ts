import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AddTaskService {  
  private subject = new Subject<any>();

  addTask( task: string ) {
    this.subject.next({ text: task });  
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
