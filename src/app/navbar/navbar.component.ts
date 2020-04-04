import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  banners: Array<number> = [1,2,3,4,5,6,7,8];
  bannerDivs: Array<object>;

	constructor() { }

// 	bannerShow(){
//
// }

	scroll(){
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("nav").style.opacity = "1";
		} else {
			document.getElementById("nav").style.opacity = "0.8";
		}
	}

	ngOnInit(): void {
		document.addEventListener("scroll", this.scroll, true);
	}
}
