import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartItems= [];

  constructor() { }


 addToCart(itemToAdd){
    if(itemToAdd.qty == 0){
      itemToAdd.qty++;
      this.cartItems.push(itemToAdd);
    } else {
      for(let item of this.cartItems){
        (itemToAdd.title == item.title) ? item.qty++ : null ;
      }
    }
    console.table(this.cartItems);
  };


  clearCart(){
    for (let item of this.cartItems) {
      item.qty = 0;
    }
    this.cartItems= [];
  };

  lessInCard(item,i){
    if(item.qty == 1){
      item.qty--;
      this.cartItems.splice(i,1)
    }else {
      item.qty --;
    }
  }
  remove(item, i){
    item.qty = 0;
    this.cartItems.splice(i,1);
  }

  calcSubTotal() {
    let total = 0;
    for(let item of this.cartItems){
      total += (item.qty * item.price);
    }
    return total;
  }

  calcDiscount(){
    let subTotal = this.calcSubTotal();
    if (subTotal <=200){
      return 0;
    }
    else if (subTotal <=500){
      subTotal= subTotal*10/100;
      return subTotal;
    }
    else {
      subTotal= subTotal*20/100;
      return subTotal;
    }
  }

   emptyWallet(){
   	
   	//@ts-ignore
   	$(".alert").addClass("show");
}

	closeAlert(){
   	this.clearCart();
     //@ts-ignore
	$(".alert").removeClass("show");
	
	}

}
