import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<Product> = [];

  constructor() { }

  addToCart(product: Product | undefined) {
    // if (product !== undefined) {
    if (product instanceof Product) {
      this.items.push(product);
    }
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}

export class Product {
  name: string;
  price: number;
  description: string;
  id: number;

  constructor() {
    this.name = '';
    this.price = 0;
    this.description = '';
    this.id = -1;
  }
}
