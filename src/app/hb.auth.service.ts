import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { User } from './hb-classes/user';
import { HbSocialUser } from './hb-classes/user';

import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Injectable()
export class AuthenticationService {

  private heartbeatApiLogin = environment.heartbeatApiRootUrl + '/login';
  private heartbeatApiTokenVerify = environment.heartbeatApiRootUrl + '/gapi/verify';

  public authState = new Subject<boolean>();

  constructor(private http: HttpClient, public socialAuthService: AuthService) {
    this.subscribeToSocialAuth();
  }

  setCurrentUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.authState.next(true);
  }

  resetCurrentUser() {
    localStorage.removeItem('currentUser');
    this.authState.next(false);
  }

  login(username: string, password: string) {
      return this.http.post<any>(this.heartbeatApiLogin, { username: username, password: password })
          .map(response => {
              // login successful if there's a jwt token in the response
              if (response.user && response.user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  this.setCurrentUser(response.user);
              }
              return response.user;
          });
  }

  verifyToken(idTokenString: string) {
      this.http.post<HbSocialUser>(this.heartbeatApiTokenVerify, { idToken: idTokenString })
      .subscribe(response => {
        if (response && response.validToken) {
          var user = new User();
          user.socialUser = response;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.setCurrentUser(user);
        } else {
          this.resetCurrentUser();
        }
      });
  }

  logout() {
      // remove user from local storage to log user out
      this.socialAuthService.signOut();
      this.resetCurrentUser();
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  subscribeToSocialAuth(): void {
    this.socialAuthService.authState.subscribe((socialUser) => {
      if(socialUser) {
        var idToken = socialUser.idToken;
        this.verifyToken(idToken);
      } else {
        this.resetCurrentUser();
      }
    });
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }
}
