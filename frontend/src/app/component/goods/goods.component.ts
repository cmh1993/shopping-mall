import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../../service/goods/goods.service';
import { ItemService } from '../../service/item.service';
@Component({
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  goods: any[] = [];
  high_category: any;
  low_category: any;
  goodsList: any[] = [];
  goodsObj: any[] = [];

  constructor( private route: ActivatedRoute, private goodsService: GoodsService, private itemService: ItemService) { }

  ngOnInit() {
    this.getGoodsList();
    this.high_category = this.route.snapshot.paramMap.get('high_category');
    this.low_category = this.route.snapshot.paramMap.get('low_category');
  }

  private getGoodsList() {
    this.goodsService.getAllGoodsList(this.route.snapshot.paramMap.get('high_category'), this.route.snapshot.paramMap.get('low_category'))
      .subscribe(goodsList => { this.goodsList = goodsList });
  }
  protected getGoodsObj(id: number) {
    this.goodsService.getGoodsById(id).subscribe(goodsObj => {this.goodsObj.push(goodsObj); });
  }

  addItemInCart(item): void {
    this.itemService.addItem(item);
    location.reload();
  }


}
