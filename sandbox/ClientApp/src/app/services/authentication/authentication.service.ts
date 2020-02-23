import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Authentication } from '../../models/Authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _session: BehaviorSubject<Authentication> = new BehaviorSubject(new Authentication());
  readonly session$ = this._session.asObservable();

  get session(): Authentication {
    return this._session.getValue();
  }


  loginUser(username: string, password: string): boolean {
    const loggedIn = !!username && !!password;
    if (loggedIn) {
      const session = this.session
      session.loggedIn = true;
      session.username = username;
      this._session.next(session);
    }

    return loggedIn;
  }
  logOut(): void {
    const session = new Authentication();
    this._session.next(session);
  }
}
