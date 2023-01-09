import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { proudctslist } from '../models/proudcts_list';

@Component({
  selector: 'app-proudect-item',
  templateUrl: './proudect-item.component.html',
  styleUrls: ['./proudect-item.component.css']
})
export class ProudectItemComponent {
  @Input() product: proudctslist
  constructor(private router: Router){
    this.product=new proudctslist;
  }
    addToCart(){}
  
    OpenDetails(id:number): void{
  
      this.router.navigate(['/proudct',id]);
    }
}
