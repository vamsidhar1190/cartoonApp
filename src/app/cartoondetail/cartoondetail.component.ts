import { Component, OnInit } from '@angular/core';
import { CartoonDataService } from '../cartoon-data.service';
import myJson from '../../assets/data/cartoons.json'

@Component({
  selector: 'app-cartoondetail',
  templateUrl: './cartoondetail.component.html',
  styleUrls: ['./cartoondetail.component.css']
})
export class CartoondetailComponent implements OnInit{
  public myCartoonData:{
    id:number,
    createdby:string,
    name:string,
    createddate:string,
    imageurl:string,
    description:string,
    priority:string
  }[]=myJson
  cartoonData={
    id:this.myCartoonData[0].id,
    createdby:this.myCartoonData[0].createdby,
    name:this.myCartoonData[0].name,
    createddate:this.myCartoonData[0].createddate,
    imageurl:this.myCartoonData[0].imageurl,
    description:this.myCartoonData[0].description,
    priority:this.myCartoonData[0].priority,
  }

constructor ( private cartoonDataService:CartoonDataService ){}

ngOnInit(): void {
  this.cartoons()  
}
 public onimageclick(image:string){
    this.cartoonData= this.cartoonDataService.cartoondata
  }
  cartoons(){
    this.cartoonData= this.cartoonDataService.cartoondata
  }

}
