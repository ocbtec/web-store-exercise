import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productList } from '../productList';
import { CartService, Product } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {  }


  ngOnInit() {
    // First get the product id from the current route
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    // Find the product that corresponds with the id provided in route
    const pDetails = productList.find((product: Product) => {
      return product.id === Number(productIdFromRoute);
    })
    if (pDetails !== undefined) {
      this.product = new Product(
        pDetails.name,
        pDetails.price,
        pDetails.description,
        pDetails.id
      );
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    console.log(this.product instanceof Product);

    if (this.product instanceof Product) {
      console.log('yes');
    }
  }
}
