import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../../service/item.service';
import { Item } from '../../../../service/item';
import {SweatersService} from "../../../../service/men/sweaters.service";

@Component({
  templateUrl: './sweaters.component.html',
  styleUrls: ['./sweaters.component.css'],
})

export class SweatersComponent implements OnInit{
  storeItems: Item[] = [];


  constructor(private itemService: ItemService, private sweatersService: SweatersService ) { }

  ngOnInit(): void {
    this.loadAllSweaters();
  }
  addItemInCart(item): void {
    this.itemService.addItem(item);
    location.reload();
  }

  private loadAllSweaters() {
    this.sweatersService.getAll().subscribe(sweaters => { this.storeItems = sweaters; });
  }




}
