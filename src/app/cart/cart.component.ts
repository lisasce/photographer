import { Component, OnInit } from '@angular/core';
import {CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss', "../galery-page/galery-page.component.scss"]
})
export class CartComponent implements OnInit {


  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
