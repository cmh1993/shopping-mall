import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GoodsService } from '../../service/goods/goods.service';

@Component({
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  product: any;

  goods: any[] = [];


  high_category: any;
  low_category: any;
  goodsList: any[] = [];
  goodsObj: any[] = [];

  constructor( private route: ActivatedRoute, private goodsService: GoodsService, ) { }

  ngOnInit() {
    this.getGoodsList();
    console.log(this.route.snapshot.paramMap.get('high_category'));
    console.log(this.route.snapshot.paramMap.get('low_category'));
  }

  private getGoodsList() {
    this.goodsService.getAllGoodsList(this.route.snapshot.paramMap.get('low_category'))
      .subscribe(goodsList => { this.goodsList = goodsList });
  }
  protected getGoodsObj(id: number) {
    this.goodsService.getGoodsById(id).subscribe(goodsObj => {this.goodsObj.push(goodsObj); });
  }



}
