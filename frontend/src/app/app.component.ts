import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ItemService} from "./service/item.service";
import { Item } from './service/item';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  cartItems: Item[] = [];

  constructor( private router: Router, private itemService: ItemService, private authService: AuthService ) {}

  ngOnInit(): void {
    this.getItemsForCart();
  }

  getItemsForCart(): void {
    this.cartItems = this.itemService.getSelectedItems();
  }

}
