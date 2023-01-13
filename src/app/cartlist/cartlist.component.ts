import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { product } from '../models/product';
import { proudctslist } from '../models/proudcts_list';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent {
  cartItems: Cart[]=[];
  cartItems1: Cart[]=[];
 // cart:Cart=new Cart
  //@Input() cartItems: Cart
  cart:Cart[]= [{
    p :new  product(),
    quantity: 0
  }];
  total:number =0;
  constructor(private route: ActivatedRoute,private router: Router,private localStore: CartService){}
  ngOnInit(): void {
  //   JSON.parse(localStorage.getItem('Mycart') || '{}')((books: Cart[]) => {
  //     this.cartItems = books;
  //     console.log(this.cartItems);
  // });

this.cartItems =JSON.parse(localStorage.getItem('MyCART') || '{}');

   for (let index = 0; index <=Object.keys(this.cartItems).length; index++) {
    const currentcart = this.cartItems[index];
    var count=currentcart.p.price * currentcart.quantity
this.total+=count
//localStorage.setItem('Total',this.total.toString())
  //  alert(currentcart.p);
    this.cartItems1.push(currentcart)
  }
 
    }
    checkout(){

      this.router.navigate(['/Checkout']);
      
    }
}
