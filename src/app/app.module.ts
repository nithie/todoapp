import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
 } from '@angular/material';

import 'hammerjs';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DisplayTaskComponent } from './display-task/display-task.component';
import { TabComponent } from './tab/tab.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { AddTaskService } from './add-task/add-task.service';
import { DisplayTaskService } from './display-task/display-task.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    DisplayTaskComponent,
    TabComponent,
    CompletedTasksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
  ],
  providers: [AddTaskService, DisplayTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
