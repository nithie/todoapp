import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { AddTaskService } from './add-task.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTaskForm: FormGroup;

  constructor(private addTaskService: AddTaskService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.addTaskForm = new FormGroup({
      'newTask' : new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    this.addTaskService.addTask(this.addTaskForm.value.newTask);
    // this.addTaskForm.reset();
  }

  openSnackBar(message: string, action:string) {
    this.snackBar.open('New Task Added Succesfully','Undo', {
      duration: 2000,
    });
  }

}
