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
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DisplayTaskComponent } from './display-task/display-task.component';
import { TabComponent } from './tab/tab.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { AddTaskService } from './add-task/add-task.service';
import { DisplayTaskService } from './display-task/display-task.service';
import { SignInComponent } from './sign-in/sign-in.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAqMV-gyVrEjxYyFNY99Yuk7T0XMJ1QKYU',
  authDomain: 'todolist-9.firebaseapp.com',
  databaseURL: 'https://todolist-9.firebaseio.com',
  projectId: 'todolist-9',
  storageBucket: 'todolist-9.appspot.com',
  messagingSenderId: '588643703304',
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    DisplayTaskComponent,
    TabComponent,
    CompletedTasksComponent,
    SignInComponent
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [AddTaskService, DisplayTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
