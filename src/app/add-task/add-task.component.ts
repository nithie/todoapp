import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { AddTaskFirebaseService } from '../services/add-task-firebase.service';
import { SignInService } from '../sign-in/sign-in.service';
import { SetDueDateService } from '../services/set-due-date.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [SetDueDateService],
})
export class AddTaskComponent implements OnInit {

  addTaskForm: FormGroup;
  uid;

  constructor(private addTaskService: AddTaskFirebaseService, public snackBar: MatSnackBar,
    public authService: SignInService, private router: Router, private dueDate: SetDueDateService ) {
      this.authService.afAuth.authState.subscribe((auth) => {
        if (auth == null) {
          this.router.navigate(['signin']);
        } else {
          this.uid = auth.uid;
        }
    });
}

  ngOnInit() {
    this.addTaskForm = new FormGroup({
      'newTask' : new FormControl(null, [Validators.required]),

    });
  }

  onSubmit() {
    this.addTaskService.addTask({
      task : this.addTaskForm.value.newTask,
      createdAt : Date.now(),
      completed: false,
      dueDate: this.dueDate.setDueDate().toString(),
    }, this.uid );
  }
}
