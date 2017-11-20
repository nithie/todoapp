import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { AddTaskFirebaseService } from '../services/add-task-firebase.service';
import { SignInService } from '../sign-in/sign-in.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {

  tasks = [];
  uid;

  constructor(private addTaskService: AddTaskFirebaseService, public authService: SignInService, private router: Router ) {
      this.authService.afAuth.authState.subscribe((auth) => {
        if (auth == null) {
          this.router.navigate(['signin']);
        } else {
          this.uid = auth.uid;
          this.addTaskService.getTask(this.uid).subscribe((data) => {
            console.log(data);
            this.tasks = data;
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
