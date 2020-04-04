import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import {CartService } from '../cart.service';



@Component({
  selector: 'app-galery-page',
  templateUrl: './galery-page.component.html',
  styleUrls: ['./galery-page.component.scss'],
})
export class GaleryPageComponent implements OnInit {
    iArray: Array<number>=[0,1,2,3,4,5,6];
    iArray2: Array<number>=[0,1,2,3,4,5,6,7,8,9,10,11,12,13];
    shootings: Array<object>= [{
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


  ngOnInit(): void {

}


	categorySelect(event){
		//@ts-ignore
    let currentText = $("#droprightBtn").text(event.target.innerText);
    //@ts-ignore
    switch (event.target.getAttribute("value")) {
    	 case "all" :
        //@ts-ignore
            $(".swiper-container[value='cities']").show();
            //@ts-ignore
            $(".swiper-container[value='wedding']").show();
            //@ts-ignore
            $(".swiper-container[value='people']").show();
            //@ts-ignore
            $(".swiper-container[value='nature']").show();
            break;
        case "nature" :
        //@ts-ignore
            $(".swiper-container[value='cities']").hide();
            //@ts-ignore
            $(".swiper-container[value='wedding']").hide();
            //@ts-ignore
            $(".swiper-container[value='people']").hide();
            //@ts-ignore
            $(".swiper-container[value='nature']").show();
            break;
        case "people" :
        //@ts-ignore
            $(".swiper-container[value='cities']").hide();
            //@ts-ignore
            $(".swiper-container[value='wedding']").hide();
            //@ts-ignore
            $(".swiper-container[value='people']").show();
            //@ts-ignore
            $(".swiper-container[value='nature']").hide();
            break;
        case "wedding" :
        //@ts-ignore
            $(".swiper-container[value='cities']").hide();
            //@ts-ignore
            $(".swiper-container[value='wedding']").show();
            //@ts-ignore
            $(".swiper-container[value='people']").hide();
            //@ts-ignore
            $(".swiper-container[value='nature']").hide();
            break;
        case "cities" :
        //@ts-ignore
            $(".swiper-container[value='cities']").show();
            //@ts-ignore
            $(".swiper-container[value='wedding']").hide();
            //@ts-ignore
            $(".swiper-container[value='people']").hide();
            //@ts-ignore
            $(".swiper-container[value='nature']").hide();
            break;
    }
}



}
