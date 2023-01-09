import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../models/product';
import { proudctslist } from '../models/proudcts_list';
import { ProductsService } from '../services/products.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-proudec-list',
  templateUrl: './proudec-list.component.html',
  styleUrls: ['./proudec-list.component.css']
})
export class ProudecListComponent {
  proudct:proudctslist[]=[] ;

  constructor(private httpService: ProductsService,private router: Router) { }

   ngOnInit():void{
// this.proudct=JSON.parse(data.toString()) 
this.httpService.getUsers().subscribe(res =>
  {   
      this.proudct = res;
      console.log(this.proudct);
  });
  }
  MyCard(){
    this.router.navigate(['/Mycard']);
  }
  
}
