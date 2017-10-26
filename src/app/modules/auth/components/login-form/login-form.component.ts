import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'tsc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  working = false;

  constructor(public afAuth: AngularFireAuth ) { }

  ngOnInit() {
    this.afAuth.auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      // .createUserWithEmailAndPassword(
      //   'jasonmarlow@gmail.com',
      //   'password1234')
      // .then( authResponse => console.log(authResponse));
  }

}
