import { Component, Input } from '@angular/core';
import { Cart } from '../models/Cart';
import { proudctslist } from '../models/proudcts_list';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent {
  @Input() product: Cart
  total:number=0
constructor(){
  this.product=new Cart
}
  ngOnInit():void{
    
    this.total=localStorage.getItem('Total') as unknown as number
    // this.proudct=JSON.parse(data.toString()) 

      }
}
