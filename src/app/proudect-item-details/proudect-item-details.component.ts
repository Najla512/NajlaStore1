import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-proudect-item-details',
  templateUrl: './proudect-item-details.component.html',
  styleUrls: ['./proudect-item-details.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class ProudectItemDetailsComponent {
  id:number=0;
  name:string='';
  image:string='';
  price:number=0;
  sub: any;
  products: product = new product;
  q:number=1;
 // cart:Cart[]=[];
 cart1:Cart[]= [];
 cart:Cart[]= [];
   cartItems: Cart = new Cart;
  constructor(private route: ActivatedRoute,private httpService: ProductsService,private router: Router, private local:CartService){}
  async ngOnInit() {
    this.sub = this.route.snapshot.params['id'];
    ( (await this.httpService.getUsers()).subscribe( res => {
      res.forEach(element => {
        if(element.id == this.sub){
          this.products.id=element.id;
          this.products.name=element.name;
          this.products.image=element.image;
          this.products.price=element.price as unknown as number;
        }
      });
      // this.roducpts.id=this.route.snapshot.params['id'];
      // this.products.name= this.route.snapshot.params['name'];
      // this.products.image = this.route.snapshot.params['image'];
      // this.products.price = this.route.snapshot.params['price'] as number;
      // this.id = res.id;
      // this.price= res.price;
      // this.name = res.name;
      // this.image = res.image;
    
    }))

  }
  //s

   addToCart():void{
   //alert(this.products.price)


   const productId = this.products.id
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
  newCartItem.p =this.products
  newCartItem.quantity = this.q
  this.cart.push(newCartItem);
}

localStorage.setItem('MyCART',JSON.stringify(this.cart))
  }else{
    const newCartItem = new Cart
    newCartItem.p =this.products
    newCartItem.quantity = this.q
    this.cart1.push(newCartItem);
    localStorage.setItem('MyCART',JSON.stringify(this.cart1))
    alert('Added successfully')
  }
}

  }
  
  MyCard(){
    this.router.navigate(['/Mycard']);
  }
}
