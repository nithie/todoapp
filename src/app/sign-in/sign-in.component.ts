import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public signin: SignInService, private router: Router) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.signin.login().then((data) => {
    this.router.navigate(['addtask']);
    });
  }
}
