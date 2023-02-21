import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartoonDataService {

  constructor() { }

  cartoondata:any={}

  cartoonsdata(item:any){
    this.cartoondata=item
    console.log(this.cartoondata);
    
  }

 
}
