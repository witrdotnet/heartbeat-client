import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { User } from './hb-classes/user';

import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Injectable()
export class AuthenticationService {

  private heartbeatApiAuth = environment.heartbeatApiRootUrl + '/';

  constructor(private http: HttpClient, public socialAuthService: AuthService) {
    this.subscribeToSocialAuth();
  }

  login(username: string, password: string) {
      return this.http.post<any>(this.heartbeatApiAuth + 'login', { username: username, password: password })
          .map(response => {
              // login successful if there's a jwt token in the response
              if (response.user && response.user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(response.user));
              }
              return response.user;
          });
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.socialAuthService.signOut();
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  subscribeToSocialAuth(): void {
    this.socialAuthService.authState.subscribe((socialUser) => {
      if(socialUser) {
        var user = new User();
        user.socialUser = socialUser;
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        localStorage.removeItem('currentUser');
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
