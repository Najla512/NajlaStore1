import { Component, EventEmitter, HostListener, Injectable, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { product } from '../models/product';
import { CartService } from '../services/cart.service';
import { Location } from '@angular/common';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CartItemComponent {
  @Input() cartItems: Cart
  
  deleteSelection = ''

  cart:Cart[]= [];
  @Output() removeItemFromCart: EventEmitter<product> = new EventEmitter();
  constructor(private route: ActivatedRoute,private router: Router,private localStore: CartService,private location: Location){
    this.cartItems=new Cart;
  }
  





  
  checkout(){

    this.router.navigate(['/Checkout']);

  }
  delete(cartItem:product){

    this.removeItemFromCart.emit(cartItem);
   this.cart =JSON.parse(localStorage.getItem('MyCART') || '{}');
   
   //alert(Object.keys(this.cart).indexOf(cartItem))
   //let index = this.cart.indexOf(cartItem);
  let index = this.cart.findIndex(o => o.p.id === cartItem.id);

 // delete this.cart[index]
   this.cart.splice(index,1);
  if(Object.keys(this.cart).length==0){
    this.cart=[]
    localStorage.setItem('MyCART',JSON.stringify(this.cart))
    alert('Deleted successfully')

  }else{
    localStorage.setItem('MyCART',JSON.stringify(this.cart))

  }
 // this.cart.splice(0,index);

  //   Object.keys(this.cart).forEach((element,index)=>{
  //     if(element==cartItem.p) delete this.cart[index];
  //  });
  location.reload();

  }
  @HostListener('click')
onClick() {
    this.location.back();
}
}
