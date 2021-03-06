import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {
  selectedItems: any[] = [];
  constructor() {}


  getItemsList() {
    if(localStorage.getItem("selectedItems").length == null) {
      // Not exist items in localStorage
      return this.selectedItems = [];
    } else {
      // Exist items in localStorage
      this.selectedItems = JSON.parse(localStorage["selectedItems"]);
      return this.selectedItems
    }
  }

  // Get items in cart
  getSelectedItems(): any[] {
    return JSON.parse(localStorage["selectedItems"]);
  }

  // Add item in cart
  addItem(item: any): void {
    // Check if item is set
    if (this.getItemsList()) {
      this.selectedItems.push(item);
      localStorage.setItem("selectedItems", JSON.stringify(this.selectedItems));
    }
  }

  // Remove item in cart
  removeItem(id:number): void {
    this.getItemsList();
    let item = this.selectedItems.find(ob => ob.style_num === id);
    let itemIndex = this.selectedItems.indexOf(item);
    this.selectedItems.splice(itemIndex, 1);
    localStorage.setItem("selectedItems", JSON.stringify(this.selectedItems))
  }
}
