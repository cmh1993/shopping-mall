import { Component, OnInit } from '@angular/core';
import { Item } from '../../service/item';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Item[] = [];
  Total: number = 0;

  constructor(private itemService: ItemService) { }
  ngOnInit(): void {
    this.getItemsForCart();
    this.SubTotal();
  }

  getItemsForCart(): void {
    this.cartItems = this.itemService.getSelectedItems();
  }
  removeItemFromCart(id:number): void {
    this.itemService.removeItem(id);
    location.reload();
  }
  SubTotal() {
    for(var i=0; i<this.cartItems.length ; i++ ) {
      this.Total += Number(this.cartItems[i].price);
    }
  }

}
