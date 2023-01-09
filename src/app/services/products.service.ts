import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import {proudctslist}from '../models/proudcts_list';
import {product}from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 
    //this.getUsers()
   
  }

  getUsers():Observable<proudctslist[]>{
    //  console.log(this.http.get<proudctslist[]>('http://localhost:3000/products'))
      return  this.http.get<proudctslist[]>('../assets/data.json');
      
      
  
    }
    
}
