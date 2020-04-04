import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-about-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  iArray: Array<number>=[0,1,2,3,4,5,6];
  shootings: Array<object> = [{
    title: 'Event Shooting 2h',
    price: 250,
    qty: 0},{
    title: 'Event Shooting 3h',
    price: 350,
    qty: 0},{
    title: 'Family Shooting ',
    price: 150,
    qty: 0},{
    title: 'Portrait Shooting',
    price: 90,
    qty: 0}
  ];
	constructor(public cartService: CartService) {

	}



	ngOnInit()
	{
  }



}




