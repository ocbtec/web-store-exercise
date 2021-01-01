import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<{ name: string, price: number, description: string, id: number } | undefined> = [];

  constructor() { }

  addToCart(product: { name: string, price: number, description: string, id: number } | undefined) {
    this.items.push(product);
    console.log(this.items);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
