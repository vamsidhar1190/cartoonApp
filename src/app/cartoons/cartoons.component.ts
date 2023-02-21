import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartoonDataService } from '../cartoon-data.service';
import { myObj } from '../interface';

@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrls: ['./cartoons.component.css']
})
export class CartoonsComponent implements OnInit {

constructor (private httpClient:HttpClient, private router:Router, private cartoonData:CartoonDataService ) { }
cartoonJson:any=[]
pagination!:number



ngOnInit(): void {
   this.readingCartoonJson();
  }
  public readingCartoonJson(){
    this.httpClient.get("../../assets/data/cartoons.json").subscribe(res=> {
      this.cartoonJson=res
      console.log(this.cartoonJson);     
    });    
    }

    cartoons(item:Object){
      this.cartoonData.cartoonsdata(item)
      console.log(this.cartoonData)
    }

}


