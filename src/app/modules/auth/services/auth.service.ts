import { Injectable } from '@angular/core';
import { IntUser } from '../interfaces/user';
import { User, UserInfo } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private _afAuth: AngularFireAuth) { }

  /**
   * This method calls the firebase service and logs a user in
   * @param {IntUser} user
   * @return {Promise<any>}
   */
  login(user: IntUser): Promise<any> {
    return this._afAuth.auth
      .signInWithEmailAndPassword(
        user.email,
        user.password
      );
  }

  register(user: IntUser) {
    return this._afAuth.auth
      .createUserWithEmailAndPassword(
        user.email,
        user.password
      );
  }

  logout() {}

  fetchProfile(userUID: string) {}

}
