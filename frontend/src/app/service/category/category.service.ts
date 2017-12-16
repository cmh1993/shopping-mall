import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class CategoryService {
  constructor(private http: Http) { }

  getAllMenCategory() {
    return this.http.get('http://localhost:8000/highCategory/10/').map((response: Response) => response.json());
  }
  getCategoryById(id: number) {
    return this.http.get('http://localhost:8000/lowCategory/' + id + '/').map((response: Response) => response.json());
  }



}
