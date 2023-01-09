import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
   //alert(this.products.id)
 this.local.saveData(this.products)
   // local.saveData(this.products)
  //  this.router.navigate(['/Mycard', { id:this.id,name:this.name,price:this.price, image:this.image}]);
  }
}
