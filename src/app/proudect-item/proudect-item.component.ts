import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { product } from '../models/product';
import { proudctslist } from '../models/proudcts_list';

@Component({
  selector: 'app-proudect-item',
  templateUrl: './proudect-item.component.html',
  styleUrls: ['./proudect-item.component.css']
})
export class ProudectItemComponent {
  @Input() product: proudctslist
  @ViewChild('cartSuccess') cartSuccess: ElementRef | undefined;
  products: product = new product;
  q:number=1;
  cart:Cart[]= [];
  cart1:Cart[]= [];
  cartItems: Cart = new Cart;
  constructor(private router: Router){
    this.product=new proudctslist;
    this.products=this.product
  }
  addToCart(p:product):void{
    //alert(this.products.price)
 
 
    const productId = this.product.id
 
   //  const data=localStorage.getItem('Mycart')?.length ==0 ? '0':localStorage.getItem('Mycart')
   //  alert(data)
   this.cart =JSON.parse(localStorage.getItem('MyCART') || '{}');
 
 //    if(data?.length)
 var count = Object.keys(this.cart).length;
 {
   if(count!=0){
 
     var fo=this.cart.find(p=>p.p.id == productId)
 if(fo){
 
   fo.quantity+=this.q;
 }else{
 
   const newCartItem = new Cart
   newCartItem.p =p
   newCartItem.quantity = this.q
   this.cart.push(newCartItem);
 }
 
 localStorage.setItem('MyCART',JSON.stringify(this.cart))
 //alert('Added successfully')
}else{
     const newCartItem = new Cart
     newCartItem.p =p
     newCartItem.quantity = this.q
     this.cart1.push(newCartItem);
     localStorage.setItem('MyCART',JSON.stringify(this.cart1))
     //alert('Added successfully')
     
     if(this.cartSuccess) {
      alert('1')
      this.cartSuccess.nativeElement.classList.add("cart-success-animation");
    }
   }
 }
 
   }
  
    OpenDetails(id:number): void{
  
      this.router.navigate(['/proudct',id]);
    }
}
