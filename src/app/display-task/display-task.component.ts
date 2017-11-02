import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AddTaskService } from '../add-task/add-task.service';
import { DisplayTaskService } from './display-task.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {

  tasks: string[] = [];
  subscription: Subscription;
  constructor( private addTaskService: AddTaskService, private displayTaskService: DisplayTaskService ) {
    this.addTaskService.getMessage().subscribe(data => this.tasks.unshift(data.text));
   }

  ngOnInit() {
  }

  remove(i) {
    this.displayTaskService.addTaskToCompletedList(this.tasks[i]);
    this.tasks.splice(i, 1);

  }
}
