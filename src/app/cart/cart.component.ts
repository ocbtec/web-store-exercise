import { Component, OnInit } from '@angular/core';
import { CartService, ShoppingItem } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Array<ShoppingItem> = [];
  totalPrice: number = 0;
  cart: CartService;

  constructor(private cartService: CartService) {
    this.cart = cartService;
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
