import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { User } from './hb-classes/user';

@Injectable()
export class AuthenticationService {

  private heartbeatApiAuth = environment.heartbeatApiRootUrl + '/HB.php/hbcore/';

  constructor(private http: HttpClient) { }

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
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }
}
