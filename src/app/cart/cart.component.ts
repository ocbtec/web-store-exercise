import { Component, OnInit } from '@angular/core';
import { CartService, ShoppingItem } from '../cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Array<ShoppingItem> = [];
  totalPrice: number = 0;
  cart: CartService;
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.cart = cartService;
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  addItem(event: any) {
    this.cart.addItem(event.target.id);
  }

  removeItem(event: any) {
    this.cart.removeItem(event.target.id);
  }

  onSubmit(customerData: { name: string, address: string }) {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.log('Your order has been submitted', customerData)
  }
}
