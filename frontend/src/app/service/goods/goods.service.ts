import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GoodsService {
  constructor(private http: Http) { }
  getAllGoodsList(high_category: any, low_category: any) {
    return this.http.get('http://localhost:8000/lowCategory/' + high_category + '_' + low_category + '/').map((response: Response) => response.json());
  }
  getGoodsById(id: number) {
    return this.http.get('http://localhost:8000/goods/' + id + '/').map((response: Response) => response.json());
  }


}

