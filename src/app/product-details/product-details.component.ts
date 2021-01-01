import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productList } from '../productList';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: { name: string, price: number, description: string, id: number } | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the product id from the current route
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    // Find the product that corresponds with the id provided in route
    this.product = productList.find(product => {
      return product.id === Number(productIdFromRoute);
    })
  }
}
