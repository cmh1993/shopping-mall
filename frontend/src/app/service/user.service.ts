import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  // http GET http://localhost:8000/accounts/
  getAll() {
    return this.http.get('http://localhost:8000/accounts/', this.jwt()).map((response: Response) => response.json());
  }

  // http GET http://localhost/accounts:8000/<id>/
  getById(id: number) {
    return this.http.get('http://localhost:8000/accounts/' + id + '/', this.jwt()).map((response: Response) => response.json());
  }

  // http POST http://localhost:8000/accounts/ email=... password=... extrafields=...
  create(user: User) {
    return this.http.post('http://localhost:8000/accounts/', user, this.jwt()).map((response: Response) => response.json());
  }

  // http PUT http://localhost:8000/accounts/<id>/ email=... password=... extrafields=...
  update(user: User) {
    return this.http.put('http://localhost:8000/accounts/' + user.id + '/', user);
  }

  // http DELETE http://localhost:8000/account/<id>/
  delete(id: number) {
    return this.http.delete('http://localhost:8000/accounts/' + id + '/', this.jwt()).map((response: Response) => response.json());
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
