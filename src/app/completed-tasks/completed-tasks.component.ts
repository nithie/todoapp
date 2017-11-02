import { Component, OnInit } from '@angular/core';

import { DisplayTaskService } from '../display-task/display-task.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {

  completedTasks: string[] = [];
  constructor(private displayTaskService:DisplayTaskService) {
    this.displayTaskService.getCompletedTask().subscribe(data => this.completedTasks.unshift(data.text));
   }

  ngOnInit() {
  }

  remove(i) {
    this.completedTasks.splice(i, 1);
  }
}