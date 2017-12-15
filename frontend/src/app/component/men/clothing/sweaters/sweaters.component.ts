import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../../service/item.service';
import { Item } from '../../../../service/item';
import { SweatersService } from "../../../../service/men/sweaters.service";
import { GoodsService } from "../../../../service/goods/goods.service";

@Component({
  templateUrl: './sweaters.component.html',
  styleUrls: ['./sweaters.component.css'],
})

export class SweatersComponent implements OnInit{
  storeItems: any[] = [];

  //
  sweaterItems: any[] = [];

  constructor(private itemService: ItemService, private sweatersService: SweatersService,
  //
  private goodsService: GoodsService,

  ) { }

  ngOnInit(): void {
    this.loadAllSweaters();
    this.loadAllGoods();
  }
  addItemInCart(item): void {
    this.itemService.addItem(item);
    location.reload();
  }

  private loadAllSweaters() {
    this.sweatersService.getAll().subscribe(sweaters => { this.storeItems = sweaters; });
    console.log(this.storeItems);
  }
  private loadAllGoods() {
    this.goodsService.getAllSweaterGoods().subscribe(goods => {this.sweaterItems = goods; });
    console.log(this.sweaterItems);

  }




}
