import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SignInService } from '../sign-in/sign-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileURL: string;
  name: string;
  isLoggedIn;

  constructor(public signin: SignInService ) {
  this.signin.afAuth.authState.subscribe( (data) => {
    this.profileURL = data.photoURL;
    this.name = data.photoURL;
    this.isLoggedIn = true;
  });
}

  ngOnInit() { }

}
