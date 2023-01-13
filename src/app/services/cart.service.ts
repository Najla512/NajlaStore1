import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/Cart';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private Mycart:Cart[]=[];
  STORAGE_KEY = 'pure-awesomeness';
  private product$ = new BehaviorSubject<any>({});
  selectedProduct$ = this.product$.asObservable();
 constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { 
 
   if ( this.storage.has(this.STORAGE_KEY) ) {
     this.Mycart = this.storage.get(this.STORAGE_KEY)
   }
 }
 
  saveData (p:product){
  
 
 alert('4')
 
   }
 
   public  getData(): Cart []{
    //    this.storage.get(this.STORAGE_KEY)
    return this.Mycart;
   }
   public removeData(key: string) {
     localStorage.removeItem(key);
   }
 
   public clearData():void {
     this.Mycart = []
 
   }
 
 
}
