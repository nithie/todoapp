import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { AddTaskFirebaseService } from './add-task-firebase.service';
import { SignInService } from '../sign-in/sign-in.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTaskForm: FormGroup;

  constructor(private addTaskService: AddTaskFirebaseService, public snackBar: MatSnackBar,
    public authService: SignInService, private router: Router ) {
      this.authService.afAuth.authState.subscribe((auth) => {
        if (auth == null) {
          this.router.navigate(['signin']);
        }
    });
}

  ngOnInit() {
    this.addTaskForm = new FormGroup({
      'newTask' : new FormControl(null, [Validators.required]),

    });
  }

  onSubmit(): void {
    console.log(this.addTaskForm.value.newTask);
    this.addTaskService.addTask(this.addTaskForm.value.newTask);
  }
}
