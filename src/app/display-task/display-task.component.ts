import { Component, OnInit, Pipe } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { AddTaskFirebaseService } from '../services/add-task-firebase.service';
import { SignInService } from '../sign-in/sign-in.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Task } from '../services/task';
import { GetTimeToLapseService } from '../services/get-time-to-lapse.service';
import { COMPILER_OPTIONS } from '@angular/core/src/linker/compiler';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {

  tasks: Task[]  = [];
  uid;
  track;

  constructor(private addTaskService: AddTaskFirebaseService, public authService: SignInService, private router: Router,
  private getTimeToLapseService: GetTimeToLapseService ) {
      this.authService.afAuth.authState.subscribe((auth) => {
        if (auth == null) {
          this.router.navigate(['signin']);
        } else {
          this.uid = auth.uid;
          this.addTaskService.getUnCompletedTask(this.uid).subscribe((data) => {
            this.tasks = data;
            this.tasks.forEach( (task) => {
              const remaining = this.getTimeToLapseService.timeToLapse(task.dueDate);
              console.log(remaining);
              if ( remaining > 0 ) {
                this.track = 'red';
              } else if ( remaining > -3 ) {
                this.track = 'orange';
              } else {
                this.track = 'green';
              }
            });
          });
        }
    });



}

  ngOnInit() {

  }

  finish(task) {
    this.addTaskService.updateTask( this.uid, task);
  }
}
