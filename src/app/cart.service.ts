import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<ShoppingItem> = [];
  itemsCount: number = 0;
  totalPrice: number = 0;

  constructor(private http: HttpClient) { }

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
    this.getTotalItemsCount();
    return this.items;
  }

  getTotalPrice(): number {
    this.totalPrice = 0;
    this.items.forEach(element => {
      this.totalPrice += element.price;
    });
    return this.totalPrice;
  }

  getTotalItemsCount() {
    this.itemsCount = 0;
    this.items.forEach(element => {
      this.itemsCount += element.count;
    });
  }

  addItem(itemId: number) {
    const sItem = this.items.find((item: ShoppingItem) => {
      return Number(itemId) === item.product.id;
    });
    if (sItem !== undefined) {
      this.addToCart(sItem.product);
      this.getTotalItemsCount();
      this.getTotalPrice();
    }
  }

  removeItem(itemId: number) {
    let productToRemove = -1;
    const shoppingItem = this.items.find((item: ShoppingItem, index) => {
      productToRemove = index;
      return Number(itemId) === item.product.id;
    });
    if (shoppingItem !== undefined && shoppingItem.count === 1) {
      this.items.splice(productToRemove, 1);
      this.getTotalItemsCount();
      this.getTotalPrice();
    } else if (shoppingItem !== undefined && shoppingItem.count > 0) {
      shoppingItem.count--;
      this.getTotalItemsCount();
      this.items[productToRemove].price = this.items[productToRemove].product.price * shoppingItem.count;
      this.getTotalPrice();
    }
  }

  getShippingPrices() {
    return this.http.get('./assets/shipping.json')
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
