import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  isLoggedIn() {
    if(localStorage.getItem('currentUser')) {
      return false;
    } else {
      return true;
    }
  }

  login(log_email: string, log_password: string) {
    return this.http.post('http://127.0.0.1:8000/api-token-auth/', { email: log_email, password: log_password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
