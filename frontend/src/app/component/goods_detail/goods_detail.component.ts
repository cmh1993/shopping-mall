import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../../service/goods/goods.service';

@Component({
  templateUrl: './goods_detail.component.html',
  styleUrls: ['./goods_detail.component.css']
})
export class GoodsDetailComponent implements OnInit{
  goods: any[] = [];

  constructor(private route: ActivatedRoute, private goodsService: GoodsService) {
  }
  ngOnInit() {
    this.getGoodsObj(this.route.snapshot.paramMap.get('styleNum'));
  }

  protected getGoodsObj(id: any) {
    this.goodsService.getGoodsById(id).subscribe(goodsObj => { this.goods = goodsObj; });
  }
  
}
