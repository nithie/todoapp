import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AddTaskFirebaseService } from '../services/add-task-firebase.service';
import { SignInService } from '../sign-in/sign-in.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {

  completedTasks = [];
  uid;
  constructor(private addTaskService: AddTaskFirebaseService, public authService: SignInService, private router: Router ) {
    this.authService.afAuth.authState.subscribe((auth) => {
      if (auth == null) {
        this.router.navigate(['signin']);
      } else {
        this.uid = auth.uid;
        this.addTaskService.getCompletedTask(this.uid).subscribe((data) => {
          this.completedTasks = data;
        });
      }
  });

}

  ngOnInit() {
  }
}
