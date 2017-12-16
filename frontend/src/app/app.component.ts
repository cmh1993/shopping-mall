import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ItemService} from "./service/item.service";
import { Item } from './service/item';
import { AuthService } from './service/auth.service';
import { CategoryService } from './service/category/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  cartItems: Item[] = [];

  menCategory: any[] = [];
  categoryObj: any[] = []

  item: any[] =[];

  constructor( private router: Router, private itemService: ItemService, private authService: AuthService,
  private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.getItemsForCart();
    this.getMenCategory();
  }

  getItemsForCart(): void {
    this.cartItems = this.itemService.getSelectedItems();
  }

  private getMenCategory() {
    this.categoryService.getAllMenCategory().subscribe(category => { this.menCategory = category; });
  }
  protected getCategoryObj(id: number) {
    this.categoryService.getCategoryById(id).subscribe(categoryObj => {this.categoryObj.push(categoryObj); });
  }



}
