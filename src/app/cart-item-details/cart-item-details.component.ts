import { Component, Injectable, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { proudctslist } from '../models/proudcts_list';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item-details',
  templateUrl: './cart-item-details.component.html',
  styleUrls: ['./cart-item-details.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CartItemDetailsComponent {
  //@Input() cart: Cart 
  @Input() product: Cart
   //MyCard:Cart[]=[];
  //products: product = new product;


  // id: number=0;
  // name:string='';
  // image:string='';
  // price:string='';
  constructor(private router: Router){
    this.product=new Cart;
  }
  ngOnInit(): void {
    //this.card=new Cart
//  this.MyCard=  this.localStore.getData('MyItems');
  //  this.id = this.route.snapshot.params['id'];
  //   this.name = this.route.snapshot.params['name'];
  //   this.image = this.route.snapshot.params['image'];
  //   this.price = this.route.snapshot.params['price'];
   
    
//this.MyCard=this.localStore.getData();

// this.route.params.subscribe(params => { 
//     this.id = params['id']; 


// });
    
  }



  checkout(){

    this.router.navigate(['/Checkout']);

  }
delete(){

  //this.localStore.clearData();
}
addNewItem(){


//  this.products=[{id:this.id,name:this.name,image:this.image,price:this.price}];

}
  calculateprice(){

  }
}
