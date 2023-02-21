import { Component, OnInit } from '@angular/core';
import { CartoonDataService } from '../cartoon-data.service';
import { myObj } from '../interface';
@Component({
  selector: 'app-cartoondetail',
  templateUrl: './cartoondetail.component.html',
  styleUrls: ['./cartoondetail.component.css']
})
export class CartoondetailComponent implements OnInit{
  cartoonData:any={}

constructor ( private cartoonDataService:CartoonDataService ){}

ngOnInit(): void {
  this.vamsi()
  console.log(this.cartoonData);   

  
}
 public onimageclick(image:string){
    this.cartoonData= this.cartoonDataService.cartoondata
    console.log(this.cartoonData);   
    
  }
  vamsi(){
    this.cartoonData= this.cartoonDataService.cartoondata
  }

}
