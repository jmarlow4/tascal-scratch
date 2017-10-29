import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IntUser } from '../../interfaces/user';

@Component({
  selector: 'tsc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginForm: FormGroup;
  working = false;

  constructor(
    private _authService: AuthService
  ) {
    // this.loginHandler({email: 'dorp@horp.com', password: 'herpderp'});
  }

  loginHandler(user: IntUser) {
    this._authService.register(user);
  }

}
