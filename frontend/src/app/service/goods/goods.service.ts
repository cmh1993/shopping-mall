import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class GoodsService {
  constructor(private http: Http) { }

  getAllSweaterGoods() {
    return this.http.get('http://localhost:8000/lowCategory/100/').map((response: Response) => response.json());
  }
  getByGoodsId(id: number) {
    return this.http.get('http://localhost:8000//goods/' + id + '/').map((response: Response) => response.json());
  }


  //
  getAllGoodsList(category: any) {
    return this.http.get('http://localhost:8000/lowCategory/' + category + '/').map((response: Response) => response.json());
  }
  getGoodsById(id: number) {
    return this.http.get('http://localhost:8000/goods/' + id + '/').map((response: Response) => response.json());
  }


}
