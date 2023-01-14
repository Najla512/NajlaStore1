import { Component, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  @Output() products: Cart[]=[]
  total: number=0;
  Address:string='';
  fullname:string='';
  cart:Cart[]= [];

  constructor(private router: Router,private location: Location){

//    this.product=new Cart[];
  }
  ngOnInit(): void {
    //   JSON.parse(localStorage.getItem('Mycart') || '{}')((books: Cart[]) => {
    //     this.cartItems = books;
    //     console.log(this.cartItems);
    // });
    this.products =JSON.parse(localStorage.getItem('MyCART') || '{}');
    for (let index = 0; index <=Object.keys(this.products).length; index++) {
      const currentcart = this.products[index];
      var count=currentcart.p.price * currentcart.quantity
  this.total+=count
}
}

submit(){
  alert('Thank you for your request, we wish you a nice day')
  this.cart=[]
  localStorage.setItem('MyCART',JSON.stringify(this.cart))
  this.router.navigate(['']);
  
}
validateName(_value:string){
console.log(_value)
}

// @HostListener('click')
// onClick() {
//     this.location.back();
// }
}
