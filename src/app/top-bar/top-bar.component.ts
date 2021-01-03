import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  itemCount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.getItems().forEach(el => {
    //   this.itemCount += el.count;
    // });
  }



}
