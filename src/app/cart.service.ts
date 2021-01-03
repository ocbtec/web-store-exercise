import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<ShoppingItem> = [];
  itemsCount: number = 0;

  constructor() { }

  addToCart(product: Product | undefined) {
    let itemIndex: number = -1;
    if (product instanceof Product) {
      const sItem = this.items.find((shoppingItem, index) => {
        itemIndex = index;
        return shoppingItem.product.id === product.id;
      });
      if (sItem){
        this.items[itemIndex].count++;
        this.items[itemIndex].price = product.price * this.items[itemIndex].count;
      } else {
        this.items.push(new ShoppingItem(product));
      }
    }
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getTotalPrice(): number {
    let totalPrice: number = 0;
    this.items.forEach(element => {
      totalPrice += element.price;
    });
    return totalPrice;
  }

  getTotalItemsCount() {
    this.itemsCount = 0;
    this.items.forEach(element => {
      this.itemsCount += element.count;
    });
  }

}

export class Product {
  name: string;
  price: number;
  description: string;
  id: number;

  constructor(name: string = '', price: number = 0, description: string = '', id: number = -1) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.id = id;
  }
}

export class ShoppingItem {
  product: Product;
  count: number;
  price: number;

  constructor(product: Product) {
    this.product = product;
    this.count = 1;
    this.price = product.price;
  }
}
