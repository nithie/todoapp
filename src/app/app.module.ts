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
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DisplayTaskComponent } from './display-task/display-task.component';
import { TabComponent } from './tab/tab.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { AddTaskFirebaseService } from './add-task/add-task-firebase.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { SignInService } from './sign-in/sign-in.service';

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
    SignInComponent,
    HeaderComponent
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
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    AppRoutingModule,
    ],
  providers: [AddTaskFirebaseService, SignInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
