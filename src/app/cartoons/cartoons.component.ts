import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartoonDataService } from '../cartoon-data.service';
import { myObj,mainObj } from '../interface';
import myJson from '../../assets/data/cartoons.json'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrls: ['./cartoons.component.css']
})
export class CartoonsComponent implements OnInit {

constructor (private httpClient:HttpClient, private router:Router, private cartoonData:CartoonDataService ) { }
// cartoonJson:{
//   id:number,
//   createdby:string,
//   name:string,
//   createddate:string,
//   imageurl:string,
//   description:string,
//   priority:string,
//   mickyImgs:myObj[]
// }[]=myJson

cartoonJson:mainObj[]=[]


pagination!:number



ngOnInit(): void {
   this.readingCartoonJson();
   
  }
  public readingCartoonJson(){
    this.httpClient.get<mainObj[]>("../../assets/data/cartoons.json").subscribe((res)=> {
      this.cartoonJson=res
      console.log(this.cartoonJson[0].mickyImgs[0].imageurl);     
    });    
    }

    cartoons(item:Object){
      this.cartoonData.cartoonsdata(item)
      console.log(this.cartoonData)
    }

}


