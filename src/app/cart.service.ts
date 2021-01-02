import { Injectable } from '@angular/core';

export class Product {
  name: string;
  price: number;
  description: string;
  id: number;

  constructor(name: string = '', price: number = 0, description: string = '', id:number = -1) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.id = id;
  }
}

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
