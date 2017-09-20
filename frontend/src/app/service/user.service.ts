import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  // http GET http://localhost/accounts/
  getAll() {
    return this.http.get('http://localhost/accounts/', this.jwt()).map((response: Response) => response.json());
  }

  // http GET http://localhost/accounts/<id>/
  getById(id: number) {
    return this.http.get('http://localhost/accounts/' + id + '/', this.jwt()).map((response: Response) => response.json());
  }

  // http POST http://localhost/accounts/ email=... password=... extrafields=...
  create(user: User) {
    return this.http.post('http://localhost/accounts/', user, this.jwt()).map((response: Response) => response.json());
  }

  // http PUT http://localhost/accounts/<id>/ email=... password=... extrafields=...
  update(user: User) {
    return this.http.put('http://localhost/accounts/' + user.id + '/', user, this.jwt()).map((response: Response) => response.json());
  }

  // http DELETE http://localhost/account/<id>/
  delete(id: number) {
    return this.http.delete('http://localhost/accounts/' + id + '/', this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      let body = currentUser;
      return new RequestOptions({ body, headers: headers });
    }
  }
}
