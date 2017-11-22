import { Component, OnInit, Pipe } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { AddTaskFirebaseService } from '../services/add-task-firebase.service';
import { SignInService } from '../sign-in/sign-in.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Task } from '../services/task';
import { GetTimeToLapseService } from '../services/get-time-to-lapse.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {

  tasks: Task[]  = [];
  uid;

  constructor(private addTaskService: AddTaskFirebaseService, public authService: SignInService, private router: Router,
  private getTimeToLapseService: GetTimeToLapseService ) {
      this.authService.afAuth.authState.subscribe((auth) => {
        if (auth == null) {
          this.router.navigate(['signin']);
        } else {
          this.uid = auth.uid;
          this.addTaskService.getUnCompletedTask(this.uid).subscribe((data) => {
            this.tasks = data;
            setInterval(this.tasks.forEach( (task) => {
              console.log('logging');
              const remaining = this.getTimeToLapseService.timeToLapse(task.dueDate);
            }), 1000);
          });
        }
    });



}

  ngOnInit() {
    
    //  setInterval( () => console.log('Logfging'), 1000 );
  }

  finish(task) {
    this.addTaskService.updateTask( this.uid, task);
  }
}
