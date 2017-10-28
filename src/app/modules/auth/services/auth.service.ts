import { Injectable } from '@angular/core';
import { IntUser } from '../interfaces/user';
import { UserInfo } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private _afAuth: AngularFireAuth) { }

  /**
   * This method calls the firebase service and logs a user in
   * @param {IntUser} user
   * @return {Promise<any>}
   */
  login(user: IntUser): Promise<UserInfo> {
    return this._afAuth.auth
      .signInWithEmailAndPassword(
        user.email,
        user.password
      );
  }

  register(user: IntUser) {}

  logout() {}

  fetchProfile(userUID: string) {}

}
