import {Component, OnInit} from '@angular/core';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'cart-app',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  cartItems: any[] = [];
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
      this.Total += Number(this.cartItems[i].goods_price);
    }
  }


}
