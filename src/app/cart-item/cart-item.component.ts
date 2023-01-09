import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CartItemComponent {
  
  
  products: product = new product;
  
  cart:Cart[]=[];

  id: number=0;
  name:string='';
  image:string='';
  price:string='';
  constructor(private route: ActivatedRoute,private router: Router,private localStore: CartService){}
  ngOnInit(): void {
//  this.MyCard=  this.localStore.getData('MyItems');
  //  this.id = this.route.snapshot.params['id'];
  //   this.name = this.route.snapshot.params['name'];
  //   this.image = this.route.snapshot.params['image'];
  //   this.price = this.route.snapshot.params['price'];
   
 //  this.product=new proudctslist 
//this.cart=this.localStore.getData();

// this.route.params.subscribe(params => { 
//     this.id = params['id']; 


// });
    
  }
  checkout(){

    this.router.navigate(['/Checkout']);

  }
}
