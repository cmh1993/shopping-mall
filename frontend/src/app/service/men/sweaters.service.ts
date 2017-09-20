import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Item } from '../item';


@Injectable()
export class SweatersService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get('http://127.0.0.1:8000/men/sweaters/').map((response: Response) => response.json());
  }
  getById(_id: number) {
    return this.http.get('http://127.0.0.1:8000/men/sweaters/'+ _id +'/').map((response: Response) => response.json());
  }
}
